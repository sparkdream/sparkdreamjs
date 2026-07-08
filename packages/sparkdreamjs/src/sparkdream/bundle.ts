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
import * as _436 from "./rep/v1/accountability";
import * as _437 from "./rep/v1/bonded_role";
import * as _438 from "./rep/v1/challenge";
import * as _439 from "./rep/v1/content_challenge";
import * as _440 from "./rep/v1/genesis";
import * as _441 from "./rep/v1/gov_action_appeal";
import * as _442 from "./rep/v1/initiative";
import * as _443 from "./rep/v1/interim_template";
import * as _444 from "./rep/v1/interim";
import * as _445 from "./rep/v1/invitation";
import * as _446 from "./rep/v1/jury_participation";
import * as _447 from "./rep/v1/jury_review";
import * as _448 from "./rep/v1/member_report";
import * as _449 from "./rep/v1/member_warning";
import * as _450 from "./rep/v1/member";
import * as _451 from "./rep/v1/params";
import * as _452 from "./rep/v1/project";
import * as _453 from "./rep/v1/query";
import * as _454 from "./rep/v1/reserved_tag";
import * as _455 from "./rep/v1/role_activity";
import * as _456 from "./rep/v1/stake";
import * as _457 from "./rep/v1/tag_budget_award";
import * as _458 from "./rep/v1/tag_budget";
import * as _459 from "./rep/v1/tag_report";
import * as _460 from "./rep/v1/tag";
import * as _461 from "./rep/v1/tx";
import * as _462 from "./reveal/module/v1/module";
import * as _463 from "./reveal/v1/genesis";
import * as _464 from "./reveal/v1/params";
import * as _465 from "./reveal/v1/query";
import * as _466 from "./reveal/v1/tx";
import * as _467 from "./reveal/v1/types";
import * as _468 from "./season/module/v1/module";
import * as _469 from "./season/v1/achievement";
import * as _470 from "./season/v1/display_name_appeal_stake";
import * as _471 from "./season/v1/display_name_moderation";
import * as _472 from "./season/v1/display_name_report_stake";
import * as _473 from "./season/v1/enums";
import * as _474 from "./season/v1/epoch_xp_tracker";
import * as _475 from "./season/v1/forum_xp_cooldown";
import * as _476 from "./season/v1/genesis";
import * as _477 from "./season/v1/guild_invite";
import * as _478 from "./season/v1/guild_membership";
import * as _479 from "./season/v1/guild";
import * as _480 from "./season/v1/member_profile";
import * as _481 from "./season/v1/member_quest_progress";
import * as _482 from "./season/v1/member_registration";
import * as _483 from "./season/v1/member_season_snapshot";
import * as _484 from "./season/v1/next_season_info";
import * as _485 from "./season/v1/nomination";
import * as _486 from "./season/v1/params";
import * as _487 from "./season/v1/query";
import * as _488 from "./season/v1/quest";
import * as _489 from "./season/v1/season_snapshot";
import * as _490 from "./season/v1/season_title_eligibility";
import * as _491 from "./season/v1/season_transition_state";
import * as _492 from "./season/v1/season";
import * as _493 from "./season/v1/title";
import * as _494 from "./season/v1/transition_recovery_state";
import * as _495 from "./season/v1/tx";
import * as _496 from "./season/v1/vote_xp_record";
import * as _497 from "./service/module/v1/module";
import * as _498 from "./service/v1/controller_transfer_case";
import * as _499 from "./service/v1/genesis";
import * as _500 from "./service/v1/operator";
import * as _501 from "./service/v1/params";
import * as _502 from "./service/v1/query";
import * as _503 from "./service/v1/refile_cooldown";
import * as _504 from "./service/v1/report";
import * as _505 from "./service/v1/reporter_rate_limit";
import * as _506 from "./service/v1/service_type_config";
import * as _507 from "./service/v1/system_report_rate_limit";
import * as _508 from "./service/v1/tier1_escrow_entry";
import * as _509 from "./service/v1/tier1_last_slash";
import * as _510 from "./service/v1/tx";
import * as _511 from "./service/v1/types";
import * as _512 from "./session/module/v1/module";
import * as _513 from "./session/v1/genesis";
import * as _514 from "./session/v1/grant";
import * as _515 from "./session/v1/params";
import * as _516 from "./session/v1/query";
import * as _517 from "./session/v1/session";
import * as _518 from "./session/v1/tx";
import * as _519 from "./shield/module/v1/module";
import * as _520 from "./shield/v1/genesis";
import * as _521 from "./shield/v1/params";
import * as _522 from "./shield/v1/query";
import * as _523 from "./shield/v1/tx";
import * as _524 from "./shield/v1/types";
import * as _525 from "./sparkdream/module/v1/module";
import * as _526 from "./sparkdream/v1/genesis";
import * as _527 from "./sparkdream/v1/params";
import * as _528 from "./sparkdream/v1/query";
import * as _529 from "./sparkdream/v1/tx";
import * as _530 from "./split/module/v1/module";
import * as _531 from "./split/v1/genesis";
import * as _532 from "./split/v1/params";
import * as _533 from "./split/v1/query";
import * as _534 from "./split/v1/share";
import * as _535 from "./split/v1/tx";
import * as _761 from "./blog/v1/tx.amino";
import * as _762 from "./collect/v1/tx.amino";
import * as _763 from "./commons/v1/tx.amino";
import * as _764 from "./ecosystem/v1/tx.amino";
import * as _765 from "./federation/v1/tx.amino";
import * as _766 from "./forum/v1/tx.amino";
import * as _767 from "./futarchy/v1/tx.amino";
import * as _768 from "./guardian/v1/tx.amino";
import * as _769 from "./name/v1/tx.amino";
import * as _770 from "./rep/v1/tx.amino";
import * as _771 from "./reveal/v1/tx.amino";
import * as _772 from "./season/v1/tx.amino";
import * as _773 from "./service/v1/tx.amino";
import * as _774 from "./session/v1/tx.amino";
import * as _775 from "./shield/v1/tx.amino";
import * as _776 from "./sparkdream/v1/tx.amino";
import * as _777 from "./split/v1/tx.amino";
import * as _778 from "./blog/v1/tx.registry";
import * as _779 from "./collect/v1/tx.registry";
import * as _780 from "./commons/v1/tx.registry";
import * as _781 from "./ecosystem/v1/tx.registry";
import * as _782 from "./federation/v1/tx.registry";
import * as _783 from "./forum/v1/tx.registry";
import * as _784 from "./futarchy/v1/tx.registry";
import * as _785 from "./guardian/v1/tx.registry";
import * as _786 from "./name/v1/tx.registry";
import * as _787 from "./rep/v1/tx.registry";
import * as _788 from "./reveal/v1/tx.registry";
import * as _789 from "./season/v1/tx.registry";
import * as _790 from "./service/v1/tx.registry";
import * as _791 from "./session/v1/tx.registry";
import * as _792 from "./shield/v1/tx.registry";
import * as _793 from "./sparkdream/v1/tx.registry";
import * as _794 from "./split/v1/tx.registry";
import * as _795 from "./blog/v1/query.lcd";
import * as _796 from "./collect/v1/query.lcd";
import * as _797 from "./commons/v1/query.lcd";
import * as _798 from "./ecosystem/v1/query.lcd";
import * as _799 from "./federation/v1/query.lcd";
import * as _800 from "./forum/v1/query.lcd";
import * as _801 from "./futarchy/v1/query.lcd";
import * as _802 from "./guardian/v1/query.lcd";
import * as _803 from "./identity/v1/query.lcd";
import * as _804 from "./name/v1/query.lcd";
import * as _805 from "./rep/v1/query.lcd";
import * as _806 from "./reveal/v1/query.lcd";
import * as _807 from "./season/v1/query.lcd";
import * as _808 from "./service/v1/query.lcd";
import * as _809 from "./session/v1/query.lcd";
import * as _810 from "./shield/v1/query.lcd";
import * as _811 from "./sparkdream/v1/query.lcd";
import * as _812 from "./split/v1/query.lcd";
import * as _813 from "./blog/v1/query.rpc.Query";
import * as _814 from "./collect/v1/query.rpc.Query";
import * as _815 from "./commons/v1/query.rpc.Query";
import * as _816 from "./ecosystem/v1/query.rpc.Query";
import * as _817 from "./federation/v1/query.rpc.Query";
import * as _818 from "./forum/v1/query.rpc.Query";
import * as _819 from "./futarchy/v1/query.rpc.Query";
import * as _820 from "./guardian/v1/query.rpc.Query";
import * as _821 from "./identity/v1/query.rpc.Query";
import * as _822 from "./name/v1/query.rpc.Query";
import * as _823 from "./rep/v1/query.rpc.Query";
import * as _824 from "./reveal/v1/query.rpc.Query";
import * as _825 from "./season/v1/query.rpc.Query";
import * as _826 from "./service/v1/query.rpc.Query";
import * as _827 from "./session/v1/query.rpc.Query";
import * as _828 from "./shield/v1/query.rpc.Query";
import * as _829 from "./sparkdream/v1/query.rpc.Query";
import * as _830 from "./split/v1/query.rpc.Query";
import * as _831 from "./blog/v1/tx.rpc.msg";
import * as _832 from "./collect/v1/tx.rpc.msg";
import * as _833 from "./commons/v1/tx.rpc.msg";
import * as _834 from "./ecosystem/v1/tx.rpc.msg";
import * as _835 from "./federation/v1/tx.rpc.msg";
import * as _836 from "./forum/v1/tx.rpc.msg";
import * as _837 from "./futarchy/v1/tx.rpc.msg";
import * as _838 from "./guardian/v1/tx.rpc.msg";
import * as _839 from "./name/v1/tx.rpc.msg";
import * as _840 from "./rep/v1/tx.rpc.msg";
import * as _841 from "./reveal/v1/tx.rpc.msg";
import * as _842 from "./season/v1/tx.rpc.msg";
import * as _843 from "./service/v1/tx.rpc.msg";
import * as _844 from "./session/v1/tx.rpc.msg";
import * as _845 from "./shield/v1/tx.rpc.msg";
import * as _846 from "./sparkdream/v1/tx.rpc.msg";
import * as _847 from "./split/v1/tx.rpc.msg";
import * as _857 from "./lcd";
import * as _858 from "./rpc.query";
import * as _859 from "./rpc.tx";
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
      ..._761,
      ..._778,
      ..._795,
      ..._813,
      ..._831
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
      ..._762,
      ..._779,
      ..._796,
      ..._814,
      ..._832
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
      ..._763,
      ..._780,
      ..._797,
      ..._815,
      ..._833
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
      ..._764,
      ..._781,
      ..._798,
      ..._816,
      ..._834
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
      ..._765,
      ..._782,
      ..._799,
      ..._817,
      ..._835
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
      ..._766,
      ..._783,
      ..._800,
      ..._818,
      ..._836
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
      ..._767,
      ..._784,
      ..._801,
      ..._819,
      ..._837
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
      ..._768,
      ..._785,
      ..._802,
      ..._820,
      ..._838
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
      ..._803,
      ..._821
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
      ..._769,
      ..._786,
      ..._804,
      ..._822,
      ..._839
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
      ..._770,
      ..._787,
      ..._805,
      ..._823,
      ..._840
    };
  }
  export namespace reveal {
    export namespace module {
      export const v1 = {
        ..._462
      };
    }
    export const v1 = {
      ..._463,
      ..._464,
      ..._465,
      ..._466,
      ..._467,
      ..._771,
      ..._788,
      ..._806,
      ..._824,
      ..._841
    };
  }
  export namespace season {
    export namespace module {
      export const v1 = {
        ..._468
      };
    }
    export const v1 = {
      ..._469,
      ..._470,
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
      ..._772,
      ..._789,
      ..._807,
      ..._825,
      ..._842
    };
  }
  export namespace service {
    export namespace module {
      export const v1 = {
        ..._497
      };
    }
    export const v1 = {
      ..._498,
      ..._499,
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
      ..._773,
      ..._790,
      ..._808,
      ..._826,
      ..._843
    };
  }
  export namespace session {
    export namespace module {
      export const v1 = {
        ..._512
      };
    }
    export const v1 = {
      ..._513,
      ..._514,
      ..._515,
      ..._516,
      ..._517,
      ..._518,
      ..._774,
      ..._791,
      ..._809,
      ..._827,
      ..._844
    };
  }
  export namespace shield {
    export namespace module {
      export const v1 = {
        ..._519
      };
    }
    export const v1 = {
      ..._520,
      ..._521,
      ..._522,
      ..._523,
      ..._524,
      ..._775,
      ..._792,
      ..._810,
      ..._828,
      ..._845
    };
  }
  export namespace sparkdream {
    export namespace module {
      export const v1 = {
        ..._525
      };
    }
    export const v1 = {
      ..._526,
      ..._527,
      ..._528,
      ..._529,
      ..._776,
      ..._793,
      ..._811,
      ..._829,
      ..._846
    };
  }
  export namespace split {
    export namespace module {
      export const v1 = {
        ..._530
      };
    }
    export const v1 = {
      ..._531,
      ..._532,
      ..._533,
      ..._534,
      ..._535,
      ..._777,
      ..._794,
      ..._812,
      ..._830,
      ..._847
    };
  }
  export const ClientFactory = {
    ..._857,
    ..._858,
    ..._859
  };
}