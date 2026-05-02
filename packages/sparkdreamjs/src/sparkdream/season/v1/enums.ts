//@ts-nocheck
/** SeasonStatus represents the current state of a season. */
export enum SeasonStatus {
  SEASON_STATUS_UNSPECIFIED = 0,
  SEASON_STATUS_ACTIVE = 1,
  SEASON_STATUS_ENDING = 2,
  SEASON_STATUS_MAINTENANCE = 3,
  SEASON_STATUS_COMPLETED = 4,
  SEASON_STATUS_NOMINATION = 5,
  UNRECOGNIZED = -1,
}
export const SeasonStatusAmino = SeasonStatus;
export function seasonStatusFromJSON(object: any): SeasonStatus {
  switch (object) {
    case 0:
    case "SEASON_STATUS_UNSPECIFIED":
      return SeasonStatus.SEASON_STATUS_UNSPECIFIED;
    case 1:
    case "SEASON_STATUS_ACTIVE":
      return SeasonStatus.SEASON_STATUS_ACTIVE;
    case 2:
    case "SEASON_STATUS_ENDING":
      return SeasonStatus.SEASON_STATUS_ENDING;
    case 3:
    case "SEASON_STATUS_MAINTENANCE":
      return SeasonStatus.SEASON_STATUS_MAINTENANCE;
    case 4:
    case "SEASON_STATUS_COMPLETED":
      return SeasonStatus.SEASON_STATUS_COMPLETED;
    case 5:
    case "SEASON_STATUS_NOMINATION":
      return SeasonStatus.SEASON_STATUS_NOMINATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SeasonStatus.UNRECOGNIZED;
  }
}
export function seasonStatusToJSON(object: SeasonStatus): string {
  switch (object) {
    case SeasonStatus.SEASON_STATUS_UNSPECIFIED:
      return "SEASON_STATUS_UNSPECIFIED";
    case SeasonStatus.SEASON_STATUS_ACTIVE:
      return "SEASON_STATUS_ACTIVE";
    case SeasonStatus.SEASON_STATUS_ENDING:
      return "SEASON_STATUS_ENDING";
    case SeasonStatus.SEASON_STATUS_MAINTENANCE:
      return "SEASON_STATUS_MAINTENANCE";
    case SeasonStatus.SEASON_STATUS_COMPLETED:
      return "SEASON_STATUS_COMPLETED";
    case SeasonStatus.SEASON_STATUS_NOMINATION:
      return "SEASON_STATUS_NOMINATION";
    case SeasonStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Rarity represents the rarity level of achievements and titles. */
export enum Rarity {
  RARITY_UNSPECIFIED = 0,
  RARITY_COMMON = 1,
  RARITY_UNCOMMON = 2,
  RARITY_RARE = 3,
  RARITY_EPIC = 4,
  RARITY_LEGENDARY = 5,
  RARITY_UNIQUE = 6,
  UNRECOGNIZED = -1,
}
export const RarityAmino = Rarity;
export function rarityFromJSON(object: any): Rarity {
  switch (object) {
    case 0:
    case "RARITY_UNSPECIFIED":
      return Rarity.RARITY_UNSPECIFIED;
    case 1:
    case "RARITY_COMMON":
      return Rarity.RARITY_COMMON;
    case 2:
    case "RARITY_UNCOMMON":
      return Rarity.RARITY_UNCOMMON;
    case 3:
    case "RARITY_RARE":
      return Rarity.RARITY_RARE;
    case 4:
    case "RARITY_EPIC":
      return Rarity.RARITY_EPIC;
    case 5:
    case "RARITY_LEGENDARY":
      return Rarity.RARITY_LEGENDARY;
    case 6:
    case "RARITY_UNIQUE":
      return Rarity.RARITY_UNIQUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Rarity.UNRECOGNIZED;
  }
}
export function rarityToJSON(object: Rarity): string {
  switch (object) {
    case Rarity.RARITY_UNSPECIFIED:
      return "RARITY_UNSPECIFIED";
    case Rarity.RARITY_COMMON:
      return "RARITY_COMMON";
    case Rarity.RARITY_UNCOMMON:
      return "RARITY_UNCOMMON";
    case Rarity.RARITY_RARE:
      return "RARITY_RARE";
    case Rarity.RARITY_EPIC:
      return "RARITY_EPIC";
    case Rarity.RARITY_LEGENDARY:
      return "RARITY_LEGENDARY";
    case Rarity.RARITY_UNIQUE:
      return "RARITY_UNIQUE";
    case Rarity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** RequirementType defines the type of requirement for achievements and titles. */
export enum RequirementType {
  REQUIREMENT_TYPE_UNSPECIFIED = 0,
  REQUIREMENT_TYPE_INITIATIVES_COMPLETED = 1,
  REQUIREMENT_TYPE_REPUTATION_EARNED = 2,
  REQUIREMENT_TYPE_INVITATIONS_SUCCESSFUL = 3,
  REQUIREMENT_TYPE_CHALLENGES_WON = 4,
  REQUIREMENT_TYPE_JURY_DUTY = 5,
  REQUIREMENT_TYPE_SEASONS_ACTIVE = 6,
  REQUIREMENT_TYPE_VOTES_CAST = 7,
  REQUIREMENT_TYPE_FORUM_HELPFUL = 8,
  REQUIREMENT_TYPE_TOP_XP = 9,
  REQUIREMENT_TYPE_MIN_LEVEL = 10,
  REQUIREMENT_TYPE_ACHIEVEMENT_COUNT = 11,
  /**
   * REQUIREMENT_TYPE_GENESIS - Marker for achievements that can only be held via genesis seeding.
   * No runtime path awards these; absence of a corresponding evaluator is the enforcement.
   */
  REQUIREMENT_TYPE_GENESIS = 12,
  UNRECOGNIZED = -1,
}
export const RequirementTypeAmino = RequirementType;
export function requirementTypeFromJSON(object: any): RequirementType {
  switch (object) {
    case 0:
    case "REQUIREMENT_TYPE_UNSPECIFIED":
      return RequirementType.REQUIREMENT_TYPE_UNSPECIFIED;
    case 1:
    case "REQUIREMENT_TYPE_INITIATIVES_COMPLETED":
      return RequirementType.REQUIREMENT_TYPE_INITIATIVES_COMPLETED;
    case 2:
    case "REQUIREMENT_TYPE_REPUTATION_EARNED":
      return RequirementType.REQUIREMENT_TYPE_REPUTATION_EARNED;
    case 3:
    case "REQUIREMENT_TYPE_INVITATIONS_SUCCESSFUL":
      return RequirementType.REQUIREMENT_TYPE_INVITATIONS_SUCCESSFUL;
    case 4:
    case "REQUIREMENT_TYPE_CHALLENGES_WON":
      return RequirementType.REQUIREMENT_TYPE_CHALLENGES_WON;
    case 5:
    case "REQUIREMENT_TYPE_JURY_DUTY":
      return RequirementType.REQUIREMENT_TYPE_JURY_DUTY;
    case 6:
    case "REQUIREMENT_TYPE_SEASONS_ACTIVE":
      return RequirementType.REQUIREMENT_TYPE_SEASONS_ACTIVE;
    case 7:
    case "REQUIREMENT_TYPE_VOTES_CAST":
      return RequirementType.REQUIREMENT_TYPE_VOTES_CAST;
    case 8:
    case "REQUIREMENT_TYPE_FORUM_HELPFUL":
      return RequirementType.REQUIREMENT_TYPE_FORUM_HELPFUL;
    case 9:
    case "REQUIREMENT_TYPE_TOP_XP":
      return RequirementType.REQUIREMENT_TYPE_TOP_XP;
    case 10:
    case "REQUIREMENT_TYPE_MIN_LEVEL":
      return RequirementType.REQUIREMENT_TYPE_MIN_LEVEL;
    case 11:
    case "REQUIREMENT_TYPE_ACHIEVEMENT_COUNT":
      return RequirementType.REQUIREMENT_TYPE_ACHIEVEMENT_COUNT;
    case 12:
    case "REQUIREMENT_TYPE_GENESIS":
      return RequirementType.REQUIREMENT_TYPE_GENESIS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequirementType.UNRECOGNIZED;
  }
}
export function requirementTypeToJSON(object: RequirementType): string {
  switch (object) {
    case RequirementType.REQUIREMENT_TYPE_UNSPECIFIED:
      return "REQUIREMENT_TYPE_UNSPECIFIED";
    case RequirementType.REQUIREMENT_TYPE_INITIATIVES_COMPLETED:
      return "REQUIREMENT_TYPE_INITIATIVES_COMPLETED";
    case RequirementType.REQUIREMENT_TYPE_REPUTATION_EARNED:
      return "REQUIREMENT_TYPE_REPUTATION_EARNED";
    case RequirementType.REQUIREMENT_TYPE_INVITATIONS_SUCCESSFUL:
      return "REQUIREMENT_TYPE_INVITATIONS_SUCCESSFUL";
    case RequirementType.REQUIREMENT_TYPE_CHALLENGES_WON:
      return "REQUIREMENT_TYPE_CHALLENGES_WON";
    case RequirementType.REQUIREMENT_TYPE_JURY_DUTY:
      return "REQUIREMENT_TYPE_JURY_DUTY";
    case RequirementType.REQUIREMENT_TYPE_SEASONS_ACTIVE:
      return "REQUIREMENT_TYPE_SEASONS_ACTIVE";
    case RequirementType.REQUIREMENT_TYPE_VOTES_CAST:
      return "REQUIREMENT_TYPE_VOTES_CAST";
    case RequirementType.REQUIREMENT_TYPE_FORUM_HELPFUL:
      return "REQUIREMENT_TYPE_FORUM_HELPFUL";
    case RequirementType.REQUIREMENT_TYPE_TOP_XP:
      return "REQUIREMENT_TYPE_TOP_XP";
    case RequirementType.REQUIREMENT_TYPE_MIN_LEVEL:
      return "REQUIREMENT_TYPE_MIN_LEVEL";
    case RequirementType.REQUIREMENT_TYPE_ACHIEVEMENT_COUNT:
      return "REQUIREMENT_TYPE_ACHIEVEMENT_COUNT";
    case RequirementType.REQUIREMENT_TYPE_GENESIS:
      return "REQUIREMENT_TYPE_GENESIS";
    case RequirementType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** GuildStatus represents the current state of a guild. */
export enum GuildStatus {
  GUILD_STATUS_UNSPECIFIED = 0,
  GUILD_STATUS_ACTIVE = 1,
  GUILD_STATUS_FROZEN = 2,
  GUILD_STATUS_DISSOLVED = 3,
  UNRECOGNIZED = -1,
}
export const GuildStatusAmino = GuildStatus;
export function guildStatusFromJSON(object: any): GuildStatus {
  switch (object) {
    case 0:
    case "GUILD_STATUS_UNSPECIFIED":
      return GuildStatus.GUILD_STATUS_UNSPECIFIED;
    case 1:
    case "GUILD_STATUS_ACTIVE":
      return GuildStatus.GUILD_STATUS_ACTIVE;
    case 2:
    case "GUILD_STATUS_FROZEN":
      return GuildStatus.GUILD_STATUS_FROZEN;
    case 3:
    case "GUILD_STATUS_DISSOLVED":
      return GuildStatus.GUILD_STATUS_DISSOLVED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GuildStatus.UNRECOGNIZED;
  }
}
export function guildStatusToJSON(object: GuildStatus): string {
  switch (object) {
    case GuildStatus.GUILD_STATUS_UNSPECIFIED:
      return "GUILD_STATUS_UNSPECIFIED";
    case GuildStatus.GUILD_STATUS_ACTIVE:
      return "GUILD_STATUS_ACTIVE";
    case GuildStatus.GUILD_STATUS_FROZEN:
      return "GUILD_STATUS_FROZEN";
    case GuildStatus.GUILD_STATUS_DISSOLVED:
      return "GUILD_STATUS_DISSOLVED";
    case GuildStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** QuestObjectiveType defines the type of quest objective. */
export enum QuestObjectiveType {
  QUEST_OBJECTIVE_TYPE_UNSPECIFIED = 0,
  QUEST_OBJECTIVE_TYPE_VOTES_CAST = 1,
  QUEST_OBJECTIVE_TYPE_FORUM_HELPFUL = 2,
  QUEST_OBJECTIVE_TYPE_INVITEE_MILESTONE = 3,
  QUEST_OBJECTIVE_TYPE_INITIATIVES_COMPLETED = 4,
  UNRECOGNIZED = -1,
}
export const QuestObjectiveTypeAmino = QuestObjectiveType;
export function questObjectiveTypeFromJSON(object: any): QuestObjectiveType {
  switch (object) {
    case 0:
    case "QUEST_OBJECTIVE_TYPE_UNSPECIFIED":
      return QuestObjectiveType.QUEST_OBJECTIVE_TYPE_UNSPECIFIED;
    case 1:
    case "QUEST_OBJECTIVE_TYPE_VOTES_CAST":
      return QuestObjectiveType.QUEST_OBJECTIVE_TYPE_VOTES_CAST;
    case 2:
    case "QUEST_OBJECTIVE_TYPE_FORUM_HELPFUL":
      return QuestObjectiveType.QUEST_OBJECTIVE_TYPE_FORUM_HELPFUL;
    case 3:
    case "QUEST_OBJECTIVE_TYPE_INVITEE_MILESTONE":
      return QuestObjectiveType.QUEST_OBJECTIVE_TYPE_INVITEE_MILESTONE;
    case 4:
    case "QUEST_OBJECTIVE_TYPE_INITIATIVES_COMPLETED":
      return QuestObjectiveType.QUEST_OBJECTIVE_TYPE_INITIATIVES_COMPLETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuestObjectiveType.UNRECOGNIZED;
  }
}
export function questObjectiveTypeToJSON(object: QuestObjectiveType): string {
  switch (object) {
    case QuestObjectiveType.QUEST_OBJECTIVE_TYPE_UNSPECIFIED:
      return "QUEST_OBJECTIVE_TYPE_UNSPECIFIED";
    case QuestObjectiveType.QUEST_OBJECTIVE_TYPE_VOTES_CAST:
      return "QUEST_OBJECTIVE_TYPE_VOTES_CAST";
    case QuestObjectiveType.QUEST_OBJECTIVE_TYPE_FORUM_HELPFUL:
      return "QUEST_OBJECTIVE_TYPE_FORUM_HELPFUL";
    case QuestObjectiveType.QUEST_OBJECTIVE_TYPE_INVITEE_MILESTONE:
      return "QUEST_OBJECTIVE_TYPE_INVITEE_MILESTONE";
    case QuestObjectiveType.QUEST_OBJECTIVE_TYPE_INITIATIVES_COMPLETED:
      return "QUEST_OBJECTIVE_TYPE_INITIATIVES_COMPLETED";
    case QuestObjectiveType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** TransitionPhase represents the current phase of a season transition. */
export enum TransitionPhase {
  TRANSITION_PHASE_UNSPECIFIED = 0,
  TRANSITION_PHASE_SNAPSHOT = 1,
  TRANSITION_PHASE_ARCHIVE_REPUTATION = 2,
  TRANSITION_PHASE_RESET_REPUTATION = 3,
  TRANSITION_PHASE_RESET_XP = 4,
  TRANSITION_PHASE_TITLES = 5,
  TRANSITION_PHASE_CLEANUP = 6,
  TRANSITION_PHASE_COMPLETE = 7,
  TRANSITION_PHASE_RETRO_REWARDS = 8,
  TRANSITION_PHASE_RETURN_NOMINATION_STAKES = 9,
  UNRECOGNIZED = -1,
}
export const TransitionPhaseAmino = TransitionPhase;
export function transitionPhaseFromJSON(object: any): TransitionPhase {
  switch (object) {
    case 0:
    case "TRANSITION_PHASE_UNSPECIFIED":
      return TransitionPhase.TRANSITION_PHASE_UNSPECIFIED;
    case 1:
    case "TRANSITION_PHASE_SNAPSHOT":
      return TransitionPhase.TRANSITION_PHASE_SNAPSHOT;
    case 2:
    case "TRANSITION_PHASE_ARCHIVE_REPUTATION":
      return TransitionPhase.TRANSITION_PHASE_ARCHIVE_REPUTATION;
    case 3:
    case "TRANSITION_PHASE_RESET_REPUTATION":
      return TransitionPhase.TRANSITION_PHASE_RESET_REPUTATION;
    case 4:
    case "TRANSITION_PHASE_RESET_XP":
      return TransitionPhase.TRANSITION_PHASE_RESET_XP;
    case 5:
    case "TRANSITION_PHASE_TITLES":
      return TransitionPhase.TRANSITION_PHASE_TITLES;
    case 6:
    case "TRANSITION_PHASE_CLEANUP":
      return TransitionPhase.TRANSITION_PHASE_CLEANUP;
    case 7:
    case "TRANSITION_PHASE_COMPLETE":
      return TransitionPhase.TRANSITION_PHASE_COMPLETE;
    case 8:
    case "TRANSITION_PHASE_RETRO_REWARDS":
      return TransitionPhase.TRANSITION_PHASE_RETRO_REWARDS;
    case 9:
    case "TRANSITION_PHASE_RETURN_NOMINATION_STAKES":
      return TransitionPhase.TRANSITION_PHASE_RETURN_NOMINATION_STAKES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransitionPhase.UNRECOGNIZED;
  }
}
export function transitionPhaseToJSON(object: TransitionPhase): string {
  switch (object) {
    case TransitionPhase.TRANSITION_PHASE_UNSPECIFIED:
      return "TRANSITION_PHASE_UNSPECIFIED";
    case TransitionPhase.TRANSITION_PHASE_SNAPSHOT:
      return "TRANSITION_PHASE_SNAPSHOT";
    case TransitionPhase.TRANSITION_PHASE_ARCHIVE_REPUTATION:
      return "TRANSITION_PHASE_ARCHIVE_REPUTATION";
    case TransitionPhase.TRANSITION_PHASE_RESET_REPUTATION:
      return "TRANSITION_PHASE_RESET_REPUTATION";
    case TransitionPhase.TRANSITION_PHASE_RESET_XP:
      return "TRANSITION_PHASE_RESET_XP";
    case TransitionPhase.TRANSITION_PHASE_TITLES:
      return "TRANSITION_PHASE_TITLES";
    case TransitionPhase.TRANSITION_PHASE_CLEANUP:
      return "TRANSITION_PHASE_CLEANUP";
    case TransitionPhase.TRANSITION_PHASE_COMPLETE:
      return "TRANSITION_PHASE_COMPLETE";
    case TransitionPhase.TRANSITION_PHASE_RETRO_REWARDS:
      return "TRANSITION_PHASE_RETRO_REWARDS";
    case TransitionPhase.TRANSITION_PHASE_RETURN_NOMINATION_STAKES:
      return "TRANSITION_PHASE_RETURN_NOMINATION_STAKES";
    case TransitionPhase.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}