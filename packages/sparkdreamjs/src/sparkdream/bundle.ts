//@ts-nocheck
import * as _356 from "./artifact/module/v1/module";
import * as _357 from "./artifact/v1/genesis";
import * as _358 from "./artifact/v1/params";
import * as _359 from "./artifact/v1/query";
import * as _360 from "./artifact/v1/tx";
import * as _361 from "./artifact/v1/types";
import * as _362 from "./blog/module/v1/module";
import * as _363 from "./blog/v1/genesis";
import * as _364 from "./blog/v1/params";
import * as _365 from "./blog/v1/post";
import * as _366 from "./blog/v1/query";
import * as _367 from "./blog/v1/tx";
import * as _368 from "./blog/v1/types";
import * as _369 from "./collect/module/v1/module";
import * as _370 from "./collect/v1/curator_activity";
import * as _371 from "./collect/v1/genesis";
import * as _372 from "./collect/v1/params";
import * as _373 from "./collect/v1/query";
import * as _374 from "./collect/v1/tx";
import * as _375 from "./collect/v1/types";
import * as _376 from "./common/v1/content_type";
import * as _377 from "./common/v1/flag_record";
import * as _378 from "./common/v1/media_flag";
import * as _379 from "./common/v1/moderation_reason";
import * as _380 from "./commons/module/v1/module";
import * as _381 from "./commons/v1/category";
import * as _382 from "./commons/v1/genesis";
import * as _383 from "./commons/v1/group";
import * as _384 from "./commons/v1/params";
import * as _385 from "./commons/v1/policy_permissions";
import * as _386 from "./commons/v1/query";
import * as _387 from "./commons/v1/recurring_spend";
import * as _388 from "./commons/v1/tx";
import * as _389 from "./ecosystem/module/v1/module";
import * as _390 from "./ecosystem/v1/genesis";
import * as _391 from "./ecosystem/v1/params";
import * as _392 from "./ecosystem/v1/query";
import * as _393 from "./ecosystem/v1/tx";
import * as _394 from "./federation/module/v1/module";
import * as _395 from "./federation/v1/genesis";
import * as _396 from "./federation/v1/packet";
import * as _397 from "./federation/v1/params";
import * as _398 from "./federation/v1/query";
import * as _399 from "./federation/v1/tx";
import * as _400 from "./federation/v1/types";
import * as _401 from "./federation/v1/verifier_activity";
import * as _402 from "./forum/module/v1/module";
import * as _403 from "./forum/v1/archive_metadata";
import * as _404 from "./forum/v1/bounty";
import * as _405 from "./forum/v1/genesis";
import * as _406 from "./forum/v1/hide_record";
import * as _407 from "./forum/v1/params";
import * as _408 from "./forum/v1/post_flag";
import * as _409 from "./forum/v1/post";
import * as _410 from "./forum/v1/query";
import * as _411 from "./forum/v1/sentinel_activity";
import * as _412 from "./forum/v1/thread_follow_count";
import * as _413 from "./forum/v1/thread_follow";
import * as _414 from "./forum/v1/thread_lock_record";
import * as _415 from "./forum/v1/thread_metadata";
import * as _416 from "./forum/v1/thread_move_record";
import * as _417 from "./forum/v1/tx";
import * as _418 from "./forum/v1/types";
import * as _419 from "./forum/v1/user_rate_limit";
import * as _420 from "./forum/v1/user_reaction_limit";
import * as _421 from "./futarchy/module/v1/module";
import * as _422 from "./futarchy/v1/genesis";
import * as _423 from "./futarchy/v1/market";
import * as _424 from "./futarchy/v1/params";
import * as _425 from "./futarchy/v1/query";
import * as _426 from "./futarchy/v1/tx";
import * as _427 from "./guardian/module/v1/module";
import * as _428 from "./guardian/v1/query";
import * as _429 from "./guardian/v1/tx";
import * as _430 from "./identity/module/v1/module";
import * as _431 from "./identity/v1/chain_identity";
import * as _432 from "./identity/v1/genesis";
import * as _433 from "./identity/v1/query";
import * as _434 from "./name/module/v1/module";
import * as _435 from "./name/v1/dispute";
import * as _436 from "./name/v1/genesis";
import * as _437 from "./name/v1/name_record";
import * as _438 from "./name/v1/owner_info";
import * as _439 from "./name/v1/params";
import * as _440 from "./name/v1/query";
import * as _441 from "./name/v1/tx";
import * as _442 from "./rep/module/v1/module";
import * as _443 from "./rep/v1/acceptance_criteria";
import * as _444 from "./rep/v1/accountability";
import * as _445 from "./rep/v1/bonded_role";
import * as _446 from "./rep/v1/challenge";
import * as _447 from "./rep/v1/content_challenge";
import * as _448 from "./rep/v1/genesis";
import * as _449 from "./rep/v1/gov_action_appeal";
import * as _450 from "./rep/v1/initiative_bounty";
import * as _451 from "./rep/v1/initiative_review";
import * as _452 from "./rep/v1/initiative";
import * as _453 from "./rep/v1/interim";
import * as _454 from "./rep/v1/invitation";
import * as _455 from "./rep/v1/jury_participation";
import * as _456 from "./rep/v1/jury_review";
import * as _457 from "./rep/v1/member_report";
import * as _458 from "./rep/v1/member_warning";
import * as _459 from "./rep/v1/member";
import * as _460 from "./rep/v1/params";
import * as _461 from "./rep/v1/project";
import * as _462 from "./rep/v1/query";
import * as _463 from "./rep/v1/reserved_tag";
import * as _464 from "./rep/v1/review_bounty";
import * as _465 from "./rep/v1/role_activity";
import * as _466 from "./rep/v1/stake";
import * as _467 from "./rep/v1/tag_budget_award";
import * as _468 from "./rep/v1/tag_budget";
import * as _469 from "./rep/v1/tag_report";
import * as _470 from "./rep/v1/tag";
import * as _471 from "./rep/v1/tx";
import * as _472 from "./reveal/module/v1/module";
import * as _473 from "./reveal/v1/genesis";
import * as _474 from "./reveal/v1/params";
import * as _475 from "./reveal/v1/query";
import * as _476 from "./reveal/v1/tx";
import * as _477 from "./reveal/v1/types";
import * as _478 from "./season/module/v1/module";
import * as _479 from "./season/v1/achievement";
import * as _480 from "./season/v1/display_name_appeal_stake";
import * as _481 from "./season/v1/display_name_moderation";
import * as _482 from "./season/v1/display_name_report_stake";
import * as _483 from "./season/v1/enums";
import * as _484 from "./season/v1/epoch_xp_tracker";
import * as _485 from "./season/v1/forum_xp_cooldown";
import * as _486 from "./season/v1/genesis";
import * as _487 from "./season/v1/guild_invite";
import * as _488 from "./season/v1/guild_membership";
import * as _489 from "./season/v1/guild";
import * as _490 from "./season/v1/member_profile";
import * as _491 from "./season/v1/member_quest_progress";
import * as _492 from "./season/v1/member_registration";
import * as _493 from "./season/v1/member_season_snapshot";
import * as _494 from "./season/v1/next_season_info";
import * as _495 from "./season/v1/nomination";
import * as _496 from "./season/v1/params";
import * as _497 from "./season/v1/query";
import * as _498 from "./season/v1/quest";
import * as _499 from "./season/v1/season_snapshot";
import * as _500 from "./season/v1/season_title_eligibility";
import * as _501 from "./season/v1/season_transition_state";
import * as _502 from "./season/v1/season";
import * as _503 from "./season/v1/title";
import * as _504 from "./season/v1/transition_recovery_state";
import * as _505 from "./season/v1/tx";
import * as _506 from "./season/v1/vote_xp_record";
import * as _507 from "./service/module/v1/module";
import * as _508 from "./service/v1/checkpoint";
import * as _509 from "./service/v1/controller_transfer_case";
import * as _510 from "./service/v1/genesis";
import * as _511 from "./service/v1/operator";
import * as _512 from "./service/v1/params";
import * as _513 from "./service/v1/query";
import * as _514 from "./service/v1/refile_cooldown";
import * as _515 from "./service/v1/report";
import * as _516 from "./service/v1/reporter_rate_limit";
import * as _517 from "./service/v1/service_type_config";
import * as _518 from "./service/v1/system_report_rate_limit";
import * as _519 from "./service/v1/tier1_escrow_entry";
import * as _520 from "./service/v1/tier1_last_slash";
import * as _521 from "./service/v1/tx";
import * as _522 from "./service/v1/types";
import * as _523 from "./session/module/v1/module";
import * as _524 from "./session/v1/genesis";
import * as _525 from "./session/v1/grant";
import * as _526 from "./session/v1/params";
import * as _527 from "./session/v1/query";
import * as _528 from "./session/v1/session";
import * as _529 from "./session/v1/tx";
import * as _530 from "./shield/module/v1/module";
import * as _531 from "./shield/v1/genesis";
import * as _532 from "./shield/v1/params";
import * as _533 from "./shield/v1/query";
import * as _534 from "./shield/v1/tx";
import * as _535 from "./shield/v1/types";
import * as _536 from "./sparkdream/module/v1/module";
import * as _537 from "./sparkdream/v1/genesis";
import * as _538 from "./sparkdream/v1/params";
import * as _539 from "./sparkdream/v1/query";
import * as _540 from "./sparkdream/v1/tx";
import * as _541 from "./split/module/v1/module";
import * as _542 from "./split/v1/genesis";
import * as _543 from "./split/v1/params";
import * as _544 from "./split/v1/query";
import * as _545 from "./split/v1/share";
import * as _546 from "./split/v1/tx";
import * as _772 from "./artifact/v1/tx.amino";
import * as _773 from "./blog/v1/tx.amino";
import * as _774 from "./collect/v1/tx.amino";
import * as _775 from "./commons/v1/tx.amino";
import * as _776 from "./ecosystem/v1/tx.amino";
import * as _777 from "./federation/v1/tx.amino";
import * as _778 from "./forum/v1/tx.amino";
import * as _779 from "./futarchy/v1/tx.amino";
import * as _780 from "./guardian/v1/tx.amino";
import * as _781 from "./name/v1/tx.amino";
import * as _782 from "./rep/v1/tx.amino";
import * as _783 from "./reveal/v1/tx.amino";
import * as _784 from "./season/v1/tx.amino";
import * as _785 from "./service/v1/tx.amino";
import * as _786 from "./session/v1/tx.amino";
import * as _787 from "./shield/v1/tx.amino";
import * as _788 from "./sparkdream/v1/tx.amino";
import * as _789 from "./split/v1/tx.amino";
import * as _790 from "./artifact/v1/tx.registry";
import * as _791 from "./blog/v1/tx.registry";
import * as _792 from "./collect/v1/tx.registry";
import * as _793 from "./commons/v1/tx.registry";
import * as _794 from "./ecosystem/v1/tx.registry";
import * as _795 from "./federation/v1/tx.registry";
import * as _796 from "./forum/v1/tx.registry";
import * as _797 from "./futarchy/v1/tx.registry";
import * as _798 from "./guardian/v1/tx.registry";
import * as _799 from "./name/v1/tx.registry";
import * as _800 from "./rep/v1/tx.registry";
import * as _801 from "./reveal/v1/tx.registry";
import * as _802 from "./season/v1/tx.registry";
import * as _803 from "./service/v1/tx.registry";
import * as _804 from "./session/v1/tx.registry";
import * as _805 from "./shield/v1/tx.registry";
import * as _806 from "./sparkdream/v1/tx.registry";
import * as _807 from "./split/v1/tx.registry";
import * as _808 from "./artifact/v1/query.lcd";
import * as _809 from "./blog/v1/query.lcd";
import * as _810 from "./collect/v1/query.lcd";
import * as _811 from "./commons/v1/query.lcd";
import * as _812 from "./ecosystem/v1/query.lcd";
import * as _813 from "./federation/v1/query.lcd";
import * as _814 from "./forum/v1/query.lcd";
import * as _815 from "./futarchy/v1/query.lcd";
import * as _816 from "./guardian/v1/query.lcd";
import * as _817 from "./identity/v1/query.lcd";
import * as _818 from "./name/v1/query.lcd";
import * as _819 from "./rep/v1/query.lcd";
import * as _820 from "./reveal/v1/query.lcd";
import * as _821 from "./season/v1/query.lcd";
import * as _822 from "./service/v1/query.lcd";
import * as _823 from "./session/v1/query.lcd";
import * as _824 from "./shield/v1/query.lcd";
import * as _825 from "./sparkdream/v1/query.lcd";
import * as _826 from "./split/v1/query.lcd";
import * as _827 from "./artifact/v1/query.rpc.Query";
import * as _828 from "./blog/v1/query.rpc.Query";
import * as _829 from "./collect/v1/query.rpc.Query";
import * as _830 from "./commons/v1/query.rpc.Query";
import * as _831 from "./ecosystem/v1/query.rpc.Query";
import * as _832 from "./federation/v1/query.rpc.Query";
import * as _833 from "./forum/v1/query.rpc.Query";
import * as _834 from "./futarchy/v1/query.rpc.Query";
import * as _835 from "./guardian/v1/query.rpc.Query";
import * as _836 from "./identity/v1/query.rpc.Query";
import * as _837 from "./name/v1/query.rpc.Query";
import * as _838 from "./rep/v1/query.rpc.Query";
import * as _839 from "./reveal/v1/query.rpc.Query";
import * as _840 from "./season/v1/query.rpc.Query";
import * as _841 from "./service/v1/query.rpc.Query";
import * as _842 from "./session/v1/query.rpc.Query";
import * as _843 from "./shield/v1/query.rpc.Query";
import * as _844 from "./sparkdream/v1/query.rpc.Query";
import * as _845 from "./split/v1/query.rpc.Query";
import * as _846 from "./artifact/v1/tx.rpc.msg";
import * as _847 from "./blog/v1/tx.rpc.msg";
import * as _848 from "./collect/v1/tx.rpc.msg";
import * as _849 from "./commons/v1/tx.rpc.msg";
import * as _850 from "./ecosystem/v1/tx.rpc.msg";
import * as _851 from "./federation/v1/tx.rpc.msg";
import * as _852 from "./forum/v1/tx.rpc.msg";
import * as _853 from "./futarchy/v1/tx.rpc.msg";
import * as _854 from "./guardian/v1/tx.rpc.msg";
import * as _855 from "./name/v1/tx.rpc.msg";
import * as _856 from "./rep/v1/tx.rpc.msg";
import * as _857 from "./reveal/v1/tx.rpc.msg";
import * as _858 from "./season/v1/tx.rpc.msg";
import * as _859 from "./service/v1/tx.rpc.msg";
import * as _860 from "./session/v1/tx.rpc.msg";
import * as _861 from "./shield/v1/tx.rpc.msg";
import * as _862 from "./sparkdream/v1/tx.rpc.msg";
import * as _863 from "./split/v1/tx.rpc.msg";
import * as _873 from "./lcd";
import * as _874 from "./rpc.query";
import * as _875 from "./rpc.tx";
export namespace sparkdream {
  export namespace artifact {
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
      ..._772,
      ..._790,
      ..._808,
      ..._827,
      ..._846
    };
  }
  export namespace blog {
    export namespace module {
      export const v1 = {
        ..._362
      };
    }
    export const v1 = {
      ..._363,
      ..._364,
      ..._365,
      ..._366,
      ..._367,
      ..._368,
      ..._773,
      ..._791,
      ..._809,
      ..._828,
      ..._847
    };
  }
  export namespace collect {
    export namespace module {
      export const v1 = {
        ..._369
      };
    }
    export const v1 = {
      ..._370,
      ..._371,
      ..._372,
      ..._373,
      ..._374,
      ..._375,
      ..._774,
      ..._792,
      ..._810,
      ..._829,
      ..._848
    };
  }
  export namespace common {
    export const v1 = {
      ..._376,
      ..._377,
      ..._378,
      ..._379
    };
  }
  export namespace commons {
    export namespace module {
      export const v1 = {
        ..._380
      };
    }
    export const v1 = {
      ..._381,
      ..._382,
      ..._383,
      ..._384,
      ..._385,
      ..._386,
      ..._387,
      ..._388,
      ..._775,
      ..._793,
      ..._811,
      ..._830,
      ..._849
    };
  }
  export namespace ecosystem {
    export namespace module {
      export const v1 = {
        ..._389
      };
    }
    export const v1 = {
      ..._390,
      ..._391,
      ..._392,
      ..._393,
      ..._776,
      ..._794,
      ..._812,
      ..._831,
      ..._850
    };
  }
  export namespace federation {
    export namespace module {
      export const v1 = {
        ..._394
      };
    }
    export const v1 = {
      ..._395,
      ..._396,
      ..._397,
      ..._398,
      ..._399,
      ..._400,
      ..._401,
      ..._777,
      ..._795,
      ..._813,
      ..._832,
      ..._851
    };
  }
  export namespace forum {
    export namespace module {
      export const v1 = {
        ..._402
      };
    }
    export const v1 = {
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
      ..._414,
      ..._415,
      ..._416,
      ..._417,
      ..._418,
      ..._419,
      ..._420,
      ..._778,
      ..._796,
      ..._814,
      ..._833,
      ..._852
    };
  }
  export namespace futarchy {
    export namespace module {
      export const v1 = {
        ..._421
      };
    }
    export const v1 = {
      ..._422,
      ..._423,
      ..._424,
      ..._425,
      ..._426,
      ..._779,
      ..._797,
      ..._815,
      ..._834,
      ..._853
    };
  }
  export namespace guardian {
    export namespace module {
      export const v1 = {
        ..._427
      };
    }
    export const v1 = {
      ..._428,
      ..._429,
      ..._780,
      ..._798,
      ..._816,
      ..._835,
      ..._854
    };
  }
  export namespace identity {
    export namespace module {
      export const v1 = {
        ..._430
      };
    }
    export const v1 = {
      ..._431,
      ..._432,
      ..._433,
      ..._817,
      ..._836
    };
  }
  export namespace name {
    export namespace module {
      export const v1 = {
        ..._434
      };
    }
    export const v1 = {
      ..._435,
      ..._436,
      ..._437,
      ..._438,
      ..._439,
      ..._440,
      ..._441,
      ..._781,
      ..._799,
      ..._818,
      ..._837,
      ..._855
    };
  }
  export namespace rep {
    export namespace module {
      export const v1 = {
        ..._442
      };
    }
    export const v1 = {
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
      ..._464,
      ..._465,
      ..._466,
      ..._467,
      ..._468,
      ..._469,
      ..._470,
      ..._471,
      ..._782,
      ..._800,
      ..._819,
      ..._838,
      ..._856
    };
  }
  export namespace reveal {
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
      ..._477,
      ..._783,
      ..._801,
      ..._820,
      ..._839,
      ..._857
    };
  }
  export namespace season {
    export namespace module {
      export const v1 = {
        ..._478
      };
    }
    export const v1 = {
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
      ..._499,
      ..._500,
      ..._501,
      ..._502,
      ..._503,
      ..._504,
      ..._505,
      ..._506,
      ..._784,
      ..._802,
      ..._821,
      ..._840,
      ..._858
    };
  }
  export namespace service {
    export namespace module {
      export const v1 = {
        ..._507
      };
    }
    export const v1 = {
      ..._508,
      ..._509,
      ..._510,
      ..._511,
      ..._512,
      ..._513,
      ..._514,
      ..._515,
      ..._516,
      ..._517,
      ..._518,
      ..._519,
      ..._520,
      ..._521,
      ..._522,
      ..._785,
      ..._803,
      ..._822,
      ..._841,
      ..._859
    };
  }
  export namespace session {
    export namespace module {
      export const v1 = {
        ..._523
      };
    }
    export const v1 = {
      ..._524,
      ..._525,
      ..._526,
      ..._527,
      ..._528,
      ..._529,
      ..._786,
      ..._804,
      ..._823,
      ..._842,
      ..._860
    };
  }
  export namespace shield {
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
      ..._787,
      ..._805,
      ..._824,
      ..._843,
      ..._861
    };
  }
  export namespace sparkdream {
    export namespace module {
      export const v1 = {
        ..._536
      };
    }
    export const v1 = {
      ..._537,
      ..._538,
      ..._539,
      ..._540,
      ..._788,
      ..._806,
      ..._825,
      ..._844,
      ..._862
    };
  }
  export namespace split {
    export namespace module {
      export const v1 = {
        ..._541
      };
    }
    export const v1 = {
      ..._542,
      ..._543,
      ..._544,
      ..._545,
      ..._546,
      ..._789,
      ..._807,
      ..._826,
      ..._845,
      ..._863
    };
  }
  export const ClientFactory = {
    ..._873,
    ..._874,
    ..._875
  };
}