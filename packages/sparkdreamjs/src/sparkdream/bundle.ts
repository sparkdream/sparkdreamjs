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
import * as _386 from "./commons/v1/poll_vote";
import * as _387 from "./commons/v1/poll";
import * as _388 from "./commons/v1/query";
import * as _389 from "./commons/v1/recurring_spend";
import * as _390 from "./commons/v1/tx";
import * as _391 from "./commons/v1/voter_tree";
import * as _392 from "./ecosystem/module/v1/module";
import * as _393 from "./ecosystem/v1/genesis";
import * as _394 from "./ecosystem/v1/params";
import * as _395 from "./ecosystem/v1/query";
import * as _396 from "./ecosystem/v1/tx";
import * as _397 from "./federation/module/v1/module";
import * as _398 from "./federation/v1/genesis";
import * as _399 from "./federation/v1/packet";
import * as _400 from "./federation/v1/params";
import * as _401 from "./federation/v1/query";
import * as _402 from "./federation/v1/tx";
import * as _403 from "./federation/v1/types";
import * as _404 from "./federation/v1/verifier_activity";
import * as _405 from "./forum/module/v1/module";
import * as _406 from "./forum/v1/archive_metadata";
import * as _407 from "./forum/v1/bounty";
import * as _408 from "./forum/v1/genesis";
import * as _409 from "./forum/v1/hide_record";
import * as _410 from "./forum/v1/params";
import * as _411 from "./forum/v1/post_flag";
import * as _412 from "./forum/v1/post";
import * as _413 from "./forum/v1/query";
import * as _414 from "./forum/v1/sentinel_activity";
import * as _415 from "./forum/v1/thread_follow_count";
import * as _416 from "./forum/v1/thread_follow";
import * as _417 from "./forum/v1/thread_lock_record";
import * as _418 from "./forum/v1/thread_metadata";
import * as _419 from "./forum/v1/thread_move_record";
import * as _420 from "./forum/v1/tx";
import * as _421 from "./forum/v1/types";
import * as _422 from "./forum/v1/user_rate_limit";
import * as _423 from "./forum/v1/user_reaction_limit";
import * as _424 from "./futarchy/module/v1/module";
import * as _425 from "./futarchy/v1/genesis";
import * as _426 from "./futarchy/v1/market";
import * as _427 from "./futarchy/v1/params";
import * as _428 from "./futarchy/v1/query";
import * as _429 from "./futarchy/v1/tx";
import * as _430 from "./guardian/module/v1/module";
import * as _431 from "./guardian/v1/query";
import * as _432 from "./guardian/v1/tx";
import * as _433 from "./identity/module/v1/module";
import * as _434 from "./identity/v1/chain_identity";
import * as _435 from "./identity/v1/genesis";
import * as _436 from "./identity/v1/query";
import * as _437 from "./name/module/v1/module";
import * as _438 from "./name/v1/dispute";
import * as _439 from "./name/v1/genesis";
import * as _440 from "./name/v1/name_record";
import * as _441 from "./name/v1/owner_info";
import * as _442 from "./name/v1/params";
import * as _443 from "./name/v1/query";
import * as _444 from "./name/v1/tx";
import * as _445 from "./rep/module/v1/module";
import * as _446 from "./rep/v1/acceptance_criteria";
import * as _447 from "./rep/v1/accountability";
import * as _448 from "./rep/v1/bonded_role";
import * as _449 from "./rep/v1/challenge";
import * as _450 from "./rep/v1/content_challenge";
import * as _451 from "./rep/v1/genesis";
import * as _452 from "./rep/v1/gov_action_appeal";
import * as _453 from "./rep/v1/initiative_bounty";
import * as _454 from "./rep/v1/initiative_review";
import * as _455 from "./rep/v1/initiative";
import * as _456 from "./rep/v1/interim";
import * as _457 from "./rep/v1/invitation";
import * as _458 from "./rep/v1/jury_participation";
import * as _459 from "./rep/v1/jury_review";
import * as _460 from "./rep/v1/member_report";
import * as _461 from "./rep/v1/member_warning";
import * as _462 from "./rep/v1/member";
import * as _463 from "./rep/v1/migration";
import * as _464 from "./rep/v1/params";
import * as _465 from "./rep/v1/project";
import * as _466 from "./rep/v1/query";
import * as _467 from "./rep/v1/reserved_tag";
import * as _468 from "./rep/v1/review_bounty";
import * as _469 from "./rep/v1/role_activity";
import * as _470 from "./rep/v1/stake";
import * as _471 from "./rep/v1/tag_budget_award";
import * as _472 from "./rep/v1/tag_budget";
import * as _473 from "./rep/v1/tag_report";
import * as _474 from "./rep/v1/tag";
import * as _475 from "./rep/v1/tx";
import * as _476 from "./reveal/module/v1/module";
import * as _477 from "./reveal/v1/genesis";
import * as _478 from "./reveal/v1/params";
import * as _479 from "./reveal/v1/query";
import * as _480 from "./reveal/v1/tx";
import * as _481 from "./reveal/v1/types";
import * as _482 from "./season/module/v1/module";
import * as _483 from "./season/v1/achievement";
import * as _484 from "./season/v1/display_name_appeal_stake";
import * as _485 from "./season/v1/display_name_moderation";
import * as _486 from "./season/v1/display_name_report_stake";
import * as _487 from "./season/v1/enums";
import * as _488 from "./season/v1/epoch_xp_tracker";
import * as _489 from "./season/v1/forum_xp_cooldown";
import * as _490 from "./season/v1/genesis";
import * as _491 from "./season/v1/guild_invite";
import * as _492 from "./season/v1/guild_membership";
import * as _493 from "./season/v1/guild";
import * as _494 from "./season/v1/member_profile";
import * as _495 from "./season/v1/member_quest_progress";
import * as _496 from "./season/v1/member_registration";
import * as _497 from "./season/v1/member_season_snapshot";
import * as _498 from "./season/v1/next_season_info";
import * as _499 from "./season/v1/nomination";
import * as _500 from "./season/v1/params";
import * as _501 from "./season/v1/query";
import * as _502 from "./season/v1/quest";
import * as _503 from "./season/v1/season_snapshot";
import * as _504 from "./season/v1/season_stats_counters";
import * as _505 from "./season/v1/season_title_eligibility";
import * as _506 from "./season/v1/season_transition_state";
import * as _507 from "./season/v1/season";
import * as _508 from "./season/v1/title";
import * as _509 from "./season/v1/transition_recovery_state";
import * as _510 from "./season/v1/tx";
import * as _511 from "./season/v1/vote_xp_record";
import * as _512 from "./service/module/v1/module";
import * as _513 from "./service/v1/checkpoint";
import * as _514 from "./service/v1/controller_transfer_case";
import * as _515 from "./service/v1/genesis";
import * as _516 from "./service/v1/operator";
import * as _517 from "./service/v1/params";
import * as _518 from "./service/v1/query";
import * as _519 from "./service/v1/refile_cooldown";
import * as _520 from "./service/v1/report";
import * as _521 from "./service/v1/reporter_rate_limit";
import * as _522 from "./service/v1/service_type_config";
import * as _523 from "./service/v1/system_report_rate_limit";
import * as _524 from "./service/v1/tier1_escrow_entry";
import * as _525 from "./service/v1/tier1_last_slash";
import * as _526 from "./service/v1/tx";
import * as _527 from "./service/v1/types";
import * as _528 from "./session/module/v1/module";
import * as _529 from "./session/v1/genesis";
import * as _530 from "./session/v1/grant";
import * as _531 from "./session/v1/params";
import * as _532 from "./session/v1/query";
import * as _533 from "./session/v1/session";
import * as _534 from "./session/v1/tx";
import * as _535 from "./shield/module/v1/module";
import * as _536 from "./shield/v1/genesis";
import * as _537 from "./shield/v1/params";
import * as _538 from "./shield/v1/query";
import * as _539 from "./shield/v1/tx";
import * as _540 from "./shield/v1/types";
import * as _541 from "./sparkdream/module/v1/module";
import * as _542 from "./sparkdream/v1/genesis";
import * as _543 from "./sparkdream/v1/params";
import * as _544 from "./sparkdream/v1/query";
import * as _545 from "./sparkdream/v1/tx";
import * as _546 from "./split/module/v1/module";
import * as _547 from "./split/v1/genesis";
import * as _548 from "./split/v1/params";
import * as _549 from "./split/v1/query";
import * as _550 from "./split/v1/share";
import * as _551 from "./split/v1/tx";
import * as _552 from "./vault/module/v1/module";
import * as _553 from "./vault/v1/genesis";
import * as _554 from "./vault/v1/params";
import * as _555 from "./vault/v1/query";
import * as _556 from "./vault/v1/tx";
import * as _557 from "./vault/v1/vault_proposal";
import * as _558 from "./vault/v1/vault_signer";
import * as _559 from "./vault/v1/vault";
import * as _785 from "./artifact/v1/tx.amino";
import * as _786 from "./blog/v1/tx.amino";
import * as _787 from "./collect/v1/tx.amino";
import * as _788 from "./commons/v1/tx.amino";
import * as _789 from "./ecosystem/v1/tx.amino";
import * as _790 from "./federation/v1/tx.amino";
import * as _791 from "./forum/v1/tx.amino";
import * as _792 from "./futarchy/v1/tx.amino";
import * as _793 from "./guardian/v1/tx.amino";
import * as _794 from "./name/v1/tx.amino";
import * as _795 from "./rep/v1/tx.amino";
import * as _796 from "./reveal/v1/tx.amino";
import * as _797 from "./season/v1/tx.amino";
import * as _798 from "./service/v1/tx.amino";
import * as _799 from "./session/v1/tx.amino";
import * as _800 from "./shield/v1/tx.amino";
import * as _801 from "./sparkdream/v1/tx.amino";
import * as _802 from "./split/v1/tx.amino";
import * as _803 from "./vault/v1/tx.amino";
import * as _804 from "./artifact/v1/tx.registry";
import * as _805 from "./blog/v1/tx.registry";
import * as _806 from "./collect/v1/tx.registry";
import * as _807 from "./commons/v1/tx.registry";
import * as _808 from "./ecosystem/v1/tx.registry";
import * as _809 from "./federation/v1/tx.registry";
import * as _810 from "./forum/v1/tx.registry";
import * as _811 from "./futarchy/v1/tx.registry";
import * as _812 from "./guardian/v1/tx.registry";
import * as _813 from "./name/v1/tx.registry";
import * as _814 from "./rep/v1/tx.registry";
import * as _815 from "./reveal/v1/tx.registry";
import * as _816 from "./season/v1/tx.registry";
import * as _817 from "./service/v1/tx.registry";
import * as _818 from "./session/v1/tx.registry";
import * as _819 from "./shield/v1/tx.registry";
import * as _820 from "./sparkdream/v1/tx.registry";
import * as _821 from "./split/v1/tx.registry";
import * as _822 from "./vault/v1/tx.registry";
import * as _823 from "./artifact/v1/query.lcd";
import * as _824 from "./blog/v1/query.lcd";
import * as _825 from "./collect/v1/query.lcd";
import * as _826 from "./commons/v1/query.lcd";
import * as _827 from "./ecosystem/v1/query.lcd";
import * as _828 from "./federation/v1/query.lcd";
import * as _829 from "./forum/v1/query.lcd";
import * as _830 from "./futarchy/v1/query.lcd";
import * as _831 from "./guardian/v1/query.lcd";
import * as _832 from "./identity/v1/query.lcd";
import * as _833 from "./name/v1/query.lcd";
import * as _834 from "./rep/v1/query.lcd";
import * as _835 from "./reveal/v1/query.lcd";
import * as _836 from "./season/v1/query.lcd";
import * as _837 from "./service/v1/query.lcd";
import * as _838 from "./session/v1/query.lcd";
import * as _839 from "./shield/v1/query.lcd";
import * as _840 from "./sparkdream/v1/query.lcd";
import * as _841 from "./split/v1/query.lcd";
import * as _842 from "./vault/v1/query.lcd";
import * as _843 from "./artifact/v1/query.rpc.Query";
import * as _844 from "./blog/v1/query.rpc.Query";
import * as _845 from "./collect/v1/query.rpc.Query";
import * as _846 from "./commons/v1/query.rpc.Query";
import * as _847 from "./ecosystem/v1/query.rpc.Query";
import * as _848 from "./federation/v1/query.rpc.Query";
import * as _849 from "./forum/v1/query.rpc.Query";
import * as _850 from "./futarchy/v1/query.rpc.Query";
import * as _851 from "./guardian/v1/query.rpc.Query";
import * as _852 from "./identity/v1/query.rpc.Query";
import * as _853 from "./name/v1/query.rpc.Query";
import * as _854 from "./rep/v1/query.rpc.Query";
import * as _855 from "./reveal/v1/query.rpc.Query";
import * as _856 from "./season/v1/query.rpc.Query";
import * as _857 from "./service/v1/query.rpc.Query";
import * as _858 from "./session/v1/query.rpc.Query";
import * as _859 from "./shield/v1/query.rpc.Query";
import * as _860 from "./sparkdream/v1/query.rpc.Query";
import * as _861 from "./split/v1/query.rpc.Query";
import * as _862 from "./vault/v1/query.rpc.Query";
import * as _863 from "./artifact/v1/tx.rpc.msg";
import * as _864 from "./blog/v1/tx.rpc.msg";
import * as _865 from "./collect/v1/tx.rpc.msg";
import * as _866 from "./commons/v1/tx.rpc.msg";
import * as _867 from "./ecosystem/v1/tx.rpc.msg";
import * as _868 from "./federation/v1/tx.rpc.msg";
import * as _869 from "./forum/v1/tx.rpc.msg";
import * as _870 from "./futarchy/v1/tx.rpc.msg";
import * as _871 from "./guardian/v1/tx.rpc.msg";
import * as _872 from "./name/v1/tx.rpc.msg";
import * as _873 from "./rep/v1/tx.rpc.msg";
import * as _874 from "./reveal/v1/tx.rpc.msg";
import * as _875 from "./season/v1/tx.rpc.msg";
import * as _876 from "./service/v1/tx.rpc.msg";
import * as _877 from "./session/v1/tx.rpc.msg";
import * as _878 from "./shield/v1/tx.rpc.msg";
import * as _879 from "./sparkdream/v1/tx.rpc.msg";
import * as _880 from "./split/v1/tx.rpc.msg";
import * as _881 from "./vault/v1/tx.rpc.msg";
import * as _891 from "./lcd";
import * as _892 from "./rpc.query";
import * as _893 from "./rpc.tx";
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
      ..._785,
      ..._804,
      ..._823,
      ..._843,
      ..._863
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
      ..._786,
      ..._805,
      ..._824,
      ..._844,
      ..._864
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
      ..._787,
      ..._806,
      ..._825,
      ..._845,
      ..._865
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
      ..._389,
      ..._390,
      ..._391,
      ..._788,
      ..._807,
      ..._826,
      ..._846,
      ..._866
    };
  }
  export namespace ecosystem {
    export namespace module {
      export const v1 = {
        ..._392
      };
    }
    export const v1 = {
      ..._393,
      ..._394,
      ..._395,
      ..._396,
      ..._789,
      ..._808,
      ..._827,
      ..._847,
      ..._867
    };
  }
  export namespace federation {
    export namespace module {
      export const v1 = {
        ..._397
      };
    }
    export const v1 = {
      ..._398,
      ..._399,
      ..._400,
      ..._401,
      ..._402,
      ..._403,
      ..._404,
      ..._790,
      ..._809,
      ..._828,
      ..._848,
      ..._868
    };
  }
  export namespace forum {
    export namespace module {
      export const v1 = {
        ..._405
      };
    }
    export const v1 = {
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
      ..._421,
      ..._422,
      ..._423,
      ..._791,
      ..._810,
      ..._829,
      ..._849,
      ..._869
    };
  }
  export namespace futarchy {
    export namespace module {
      export const v1 = {
        ..._424
      };
    }
    export const v1 = {
      ..._425,
      ..._426,
      ..._427,
      ..._428,
      ..._429,
      ..._792,
      ..._811,
      ..._830,
      ..._850,
      ..._870
    };
  }
  export namespace guardian {
    export namespace module {
      export const v1 = {
        ..._430
      };
    }
    export const v1 = {
      ..._431,
      ..._432,
      ..._793,
      ..._812,
      ..._831,
      ..._851,
      ..._871
    };
  }
  export namespace identity {
    export namespace module {
      export const v1 = {
        ..._433
      };
    }
    export const v1 = {
      ..._434,
      ..._435,
      ..._436,
      ..._832,
      ..._852
    };
  }
  export namespace name {
    export namespace module {
      export const v1 = {
        ..._437
      };
    }
    export const v1 = {
      ..._438,
      ..._439,
      ..._440,
      ..._441,
      ..._442,
      ..._443,
      ..._444,
      ..._794,
      ..._813,
      ..._833,
      ..._853,
      ..._872
    };
  }
  export namespace rep {
    export namespace module {
      export const v1 = {
        ..._445
      };
    }
    export const v1 = {
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
      ..._472,
      ..._473,
      ..._474,
      ..._475,
      ..._795,
      ..._814,
      ..._834,
      ..._854,
      ..._873
    };
  }
  export namespace reveal {
    export namespace module {
      export const v1 = {
        ..._476
      };
    }
    export const v1 = {
      ..._477,
      ..._478,
      ..._479,
      ..._480,
      ..._481,
      ..._796,
      ..._815,
      ..._835,
      ..._855,
      ..._874
    };
  }
  export namespace season {
    export namespace module {
      export const v1 = {
        ..._482
      };
    }
    export const v1 = {
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
      ..._507,
      ..._508,
      ..._509,
      ..._510,
      ..._511,
      ..._797,
      ..._816,
      ..._836,
      ..._856,
      ..._875
    };
  }
  export namespace service {
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
      ..._519,
      ..._520,
      ..._521,
      ..._522,
      ..._523,
      ..._524,
      ..._525,
      ..._526,
      ..._527,
      ..._798,
      ..._817,
      ..._837,
      ..._857,
      ..._876
    };
  }
  export namespace session {
    export namespace module {
      export const v1 = {
        ..._528
      };
    }
    export const v1 = {
      ..._529,
      ..._530,
      ..._531,
      ..._532,
      ..._533,
      ..._534,
      ..._799,
      ..._818,
      ..._838,
      ..._858,
      ..._877
    };
  }
  export namespace shield {
    export namespace module {
      export const v1 = {
        ..._535
      };
    }
    export const v1 = {
      ..._536,
      ..._537,
      ..._538,
      ..._539,
      ..._540,
      ..._800,
      ..._819,
      ..._839,
      ..._859,
      ..._878
    };
  }
  export namespace sparkdream {
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
      ..._801,
      ..._820,
      ..._840,
      ..._860,
      ..._879
    };
  }
  export namespace split {
    export namespace module {
      export const v1 = {
        ..._546
      };
    }
    export const v1 = {
      ..._547,
      ..._548,
      ..._549,
      ..._550,
      ..._551,
      ..._802,
      ..._821,
      ..._841,
      ..._861,
      ..._880
    };
  }
  export namespace vault {
    export namespace module {
      export const v1 = {
        ..._552
      };
    }
    export const v1 = {
      ..._553,
      ..._554,
      ..._555,
      ..._556,
      ..._557,
      ..._558,
      ..._559,
      ..._803,
      ..._822,
      ..._842,
      ..._862,
      ..._881
    };
  }
  export const ClientFactory = {
    ..._891,
    ..._892,
    ..._893
  };
}