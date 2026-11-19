//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { PolicyPermissions, PolicyPermissionsAmino } from "./policy_permissions";
import { Group, GroupAmino, Proposal, ProposalAmino, AnonVoteTally, AnonVoteTallyAmino, Member, MemberAmino, DecisionPolicy, DecisionPolicyAmino, Vote, VoteAmino } from "./group";
import { Category, CategoryAmino } from "./category";
import { Poll, PollAmino, PollOpenCount, PollOpenCountAmino } from "./poll";
import { PollVote, PollVoteAmino } from "./poll_vote";
import { VoterTree, VoterTreeAmino } from "./voter_tree";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the commons module's genesis state.
 * @name GenesisState
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  policyPermissionsMap: PolicyPermissions[];
  groupMap: Group[];
  /**
   * members stores all council members keyed by council_name
   */
  councilMembers: CouncilMembers[];
  /**
   * decision_policies stores decision policies keyed by policy_address
   */
  decisionPolicies: PolicyWithAddress[];
  /**
   * proposals stores all proposals
   */
  proposals: Proposal[];
  /**
   * next_proposal_id is the next auto-increment proposal ID
   */
  nextProposalId: bigint;
  /**
   * next_council_id is the next auto-increment council ID
   */
  nextCouncilId: bigint;
  /**
   * policy_versions stores the current version for each policy address
   */
  policyVersions: PolicyVersionEntry[];
  /**
   * votes stores all active votes
   */
  proposalVotes: ProposalVotes[];
  /**
   * category_map stores all shared content categories
   */
  categoryMap: Category[];
  /**
   * next_category_id is the next auto-increment category ID
   */
  nextCategoryId: bigint;
  /**
   * founding_members overrides the build's compiled-in genesis founders
   * (GenesisNames / GenesisHandles / FounderName) when non-empty, so a chain
   * launched from a shared build can bootstrap governance around its own
   * accounts. Empty means: use the build's founders. Consumed by the
   * governance bootstrap at InitGenesis and intentionally not exported: an
   * exported chain already carries its bootstrapped councils in group_map /
   * council_members, and InitGenesis skips the bootstrap whenever group_map
   * is non-empty.
   */
  foundingMembers: FoundingMember[];
  /**
   * epoch_spending carries the per-(policy, UTC day) spend buckets so a
   * round trip does not reset the daily caps.
   */
  epochSpending: EpochSpendingEntry[];
  /**
   * market_to_group links open confidence-vote markets to their group.
   */
  marketToGroup: MarketToGroupEntry[];
  /**
   * market_trigger_queue holds the scheduled confidence-vote markets.
   */
  marketTriggerQueue: MarketTriggerEntry[];
  /**
   * deleted_policies lists the policy addresses of deleted groups; claims
   * granted by a former group policy are refused.
   */
  deletedPolicies: string[];
  /**
   * anon_vote_tallies carries the anonymous vote counts per proposal, so a
   * round trip keeps them visible in proposal queries.
   */
  anonVoteTallies: AnonVoteTallyEntry[];
  /**
   * anon_proposal_counts carries the per-(council, UTC day) anonymous
   * proposal counters, so a round trip does not reset the daily cap.
   */
  anonProposalCounts: AnonProposalCountEntry[];
  /**
   * polls are every stored poll (open, and closed or cancelled ones still
   * inside the retention window).
   */
  polls: Poll[];
  /**
   * poll_votes are the open votes on stored polls.
   */
  pollVotes: PollVote[];
  /**
   * next_poll_id is the next poll ID to assign.
   */
  nextPollId: bigint;
  /**
   * proposal_voter_trees are the voter snapshots of secret-ballot proposals
   * still open for voting.
   */
  proposalVoterTrees: ProposalVoterTreeEntry[];
  /**
   * poll_voter_trees are the voter snapshots of open secret-ballot polls.
   */
  pollVoterTrees: PollVoterTreeEntry[];
  /**
   * poll_open_counts are the per-creator poll-opening buckets, so a round
   * trip does not grant a second daily allowance.
   */
  pollOpenCounts: PollOpenCount[];
  /**
   * treasury_wind_downs are the deleted groups whose staked treasury is
   * still being unbonded and swept.
   */
  treasuryWindDowns: TreasuryWindDown[];
  /**
   * treasury_stakers are the standard policy addresses of the live groups
   * that have delegated from their treasury. The treasury stake cap and the
   * x/gov tally read this index instead of walking every group.
   */
  treasuryStakers: string[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.commons.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the commons module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  policy_permissions_map?: PolicyPermissionsAmino[];
  group_map?: GroupAmino[];
  /**
   * members stores all council members keyed by council_name
   */
  council_members?: CouncilMembersAmino[];
  /**
   * decision_policies stores decision policies keyed by policy_address
   */
  decision_policies?: PolicyWithAddressAmino[];
  /**
   * proposals stores all proposals
   */
  proposals?: ProposalAmino[];
  /**
   * next_proposal_id is the next auto-increment proposal ID
   */
  next_proposal_id?: string;
  /**
   * next_council_id is the next auto-increment council ID
   */
  next_council_id?: string;
  /**
   * policy_versions stores the current version for each policy address
   */
  policy_versions?: PolicyVersionEntryAmino[];
  /**
   * votes stores all active votes
   */
  proposal_votes?: ProposalVotesAmino[];
  /**
   * category_map stores all shared content categories
   */
  category_map?: CategoryAmino[];
  /**
   * next_category_id is the next auto-increment category ID
   */
  next_category_id?: string;
  /**
   * founding_members overrides the build's compiled-in genesis founders
   * (GenesisNames / GenesisHandles / FounderName) when non-empty, so a chain
   * launched from a shared build can bootstrap governance around its own
   * accounts. Empty means: use the build's founders. Consumed by the
   * governance bootstrap at InitGenesis and intentionally not exported: an
   * exported chain already carries its bootstrapped councils in group_map /
   * council_members, and InitGenesis skips the bootstrap whenever group_map
   * is non-empty.
   */
  founding_members?: FoundingMemberAmino[];
  /**
   * epoch_spending carries the per-(policy, UTC day) spend buckets so a
   * round trip does not reset the daily caps.
   */
  epoch_spending?: EpochSpendingEntryAmino[];
  /**
   * market_to_group links open confidence-vote markets to their group.
   */
  market_to_group?: MarketToGroupEntryAmino[];
  /**
   * market_trigger_queue holds the scheduled confidence-vote markets.
   */
  market_trigger_queue?: MarketTriggerEntryAmino[];
  /**
   * deleted_policies lists the policy addresses of deleted groups; claims
   * granted by a former group policy are refused.
   */
  deleted_policies?: string[];
  /**
   * anon_vote_tallies carries the anonymous vote counts per proposal, so a
   * round trip keeps them visible in proposal queries.
   */
  anon_vote_tallies?: AnonVoteTallyEntryAmino[];
  /**
   * anon_proposal_counts carries the per-(council, UTC day) anonymous
   * proposal counters, so a round trip does not reset the daily cap.
   */
  anon_proposal_counts?: AnonProposalCountEntryAmino[];
  /**
   * polls are every stored poll (open, and closed or cancelled ones still
   * inside the retention window).
   */
  polls?: PollAmino[];
  /**
   * poll_votes are the open votes on stored polls.
   */
  poll_votes?: PollVoteAmino[];
  /**
   * next_poll_id is the next poll ID to assign.
   */
  next_poll_id?: string;
  /**
   * proposal_voter_trees are the voter snapshots of secret-ballot proposals
   * still open for voting.
   */
  proposal_voter_trees?: ProposalVoterTreeEntryAmino[];
  /**
   * poll_voter_trees are the voter snapshots of open secret-ballot polls.
   */
  poll_voter_trees?: PollVoterTreeEntryAmino[];
  /**
   * poll_open_counts are the per-creator poll-opening buckets, so a round
   * trip does not grant a second daily allowance.
   */
  poll_open_counts?: PollOpenCountAmino[];
  /**
   * treasury_wind_downs are the deleted groups whose staked treasury is
   * still being unbonded and swept.
   */
  treasury_wind_downs?: TreasuryWindDownAmino[];
  /**
   * treasury_stakers are the standard policy addresses of the live groups
   * that have delegated from their treasury. The treasury stake cap and the
   * x/gov tally read this index instead of walking every group.
   */
  treasury_stakers?: string[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.commons.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * TreasuryWindDown is the pending unwinding of a deleted group's treasury
 * stake: the EndBlocker undelegates what is still staked, waits for the
 * unbonding entries to mature and then sweeps the balance to the heir.
 * @name TreasuryWindDown
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.TreasuryWindDown
 */
export interface TreasuryWindDown {
  /**
   * policy_address is the deleted group's standard policy address.
   */
  policyAddress: string;
  /**
   * heir receives the unbonded SPARK: the deleted group's parent policy.
   * Empty when the parent was not a group policy (x/gov); the funds then
   * stay at policy_address, like the rest of such a group's treasury.
   */
  heir: string;
  /**
   * due is when the EndBlocker next looks at this entry (unix seconds).
   */
  due: bigint;
}
export interface TreasuryWindDownProtoMsg {
  typeUrl: "/sparkdream.commons.v1.TreasuryWindDown";
  value: Uint8Array;
}
/**
 * TreasuryWindDown is the pending unwinding of a deleted group's treasury
 * stake: the EndBlocker undelegates what is still staked, waits for the
 * unbonding entries to mature and then sweeps the balance to the heir.
 * @name TreasuryWindDownAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.TreasuryWindDown
 */
export interface TreasuryWindDownAmino {
  /**
   * policy_address is the deleted group's standard policy address.
   */
  policy_address?: string;
  /**
   * heir receives the unbonded SPARK: the deleted group's parent policy.
   * Empty when the parent was not a group policy (x/gov); the funds then
   * stay at policy_address, like the rest of such a group's treasury.
   */
  heir?: string;
  /**
   * due is when the EndBlocker next looks at this entry (unix seconds).
   */
  due?: string;
}
export interface TreasuryWindDownAminoMsg {
  type: "/sparkdream.commons.v1.TreasuryWindDown";
  value: TreasuryWindDownAmino;
}
/**
 * ProposalVoterTreeEntry pairs a proposal ID with its voter snapshot.
 * @name ProposalVoterTreeEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.ProposalVoterTreeEntry
 */
export interface ProposalVoterTreeEntry {
  proposalId: bigint;
  tree: VoterTree;
}
export interface ProposalVoterTreeEntryProtoMsg {
  typeUrl: "/sparkdream.commons.v1.ProposalVoterTreeEntry";
  value: Uint8Array;
}
/**
 * ProposalVoterTreeEntry pairs a proposal ID with its voter snapshot.
 * @name ProposalVoterTreeEntryAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.ProposalVoterTreeEntry
 */
export interface ProposalVoterTreeEntryAmino {
  proposal_id?: string;
  tree?: VoterTreeAmino;
}
export interface ProposalVoterTreeEntryAminoMsg {
  type: "/sparkdream.commons.v1.ProposalVoterTreeEntry";
  value: ProposalVoterTreeEntryAmino;
}
/**
 * PollVoterTreeEntry pairs a poll ID with its voter snapshot.
 * @name PollVoterTreeEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PollVoterTreeEntry
 */
export interface PollVoterTreeEntry {
  pollId: bigint;
  tree: VoterTree;
}
export interface PollVoterTreeEntryProtoMsg {
  typeUrl: "/sparkdream.commons.v1.PollVoterTreeEntry";
  value: Uint8Array;
}
/**
 * PollVoterTreeEntry pairs a poll ID with its voter snapshot.
 * @name PollVoterTreeEntryAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PollVoterTreeEntry
 */
export interface PollVoterTreeEntryAmino {
  poll_id?: string;
  tree?: VoterTreeAmino;
}
export interface PollVoterTreeEntryAminoMsg {
  type: "/sparkdream.commons.v1.PollVoterTreeEntry";
  value: PollVoterTreeEntryAmino;
}
/**
 * AnonVoteTallyEntry pairs a proposal ID with its anonymous vote tally.
 * @name AnonVoteTallyEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.AnonVoteTallyEntry
 */
export interface AnonVoteTallyEntry {
  proposalId: bigint;
  tally: AnonVoteTally;
}
export interface AnonVoteTallyEntryProtoMsg {
  typeUrl: "/sparkdream.commons.v1.AnonVoteTallyEntry";
  value: Uint8Array;
}
/**
 * AnonVoteTallyEntry pairs a proposal ID with its anonymous vote tally.
 * @name AnonVoteTallyEntryAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.AnonVoteTallyEntry
 */
export interface AnonVoteTallyEntryAmino {
  proposal_id?: string;
  tally?: AnonVoteTallyAmino;
}
export interface AnonVoteTallyEntryAminoMsg {
  type: "/sparkdream.commons.v1.AnonVoteTallyEntry";
  value: AnonVoteTallyEntryAmino;
}
/**
 * AnonProposalCountEntry is one per-(council, UTC day) anonymous proposal
 * counter.
 * @name AnonProposalCountEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.AnonProposalCountEntry
 */
export interface AnonProposalCountEntry {
  councilName: string;
  /**
   * utc_day is the block time in unix seconds divided by 86400.
   */
  utcDay: bigint;
  count: bigint;
}
export interface AnonProposalCountEntryProtoMsg {
  typeUrl: "/sparkdream.commons.v1.AnonProposalCountEntry";
  value: Uint8Array;
}
/**
 * AnonProposalCountEntry is one per-(council, UTC day) anonymous proposal
 * counter.
 * @name AnonProposalCountEntryAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.AnonProposalCountEntry
 */
export interface AnonProposalCountEntryAmino {
  council_name?: string;
  /**
   * utc_day is the block time in unix seconds divided by 86400.
   */
  utc_day?: string;
  count?: string;
}
export interface AnonProposalCountEntryAminoMsg {
  type: "/sparkdream.commons.v1.AnonProposalCountEntry";
  value: AnonProposalCountEntryAmino;
}
/**
 * EpochSpendingEntry is one per-epoch spend bucket of a group policy.
 * @name EpochSpendingEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.EpochSpendingEntry
 */
export interface EpochSpendingEntry {
  policyAddress: string;
  epochDay: bigint;
  amount: string;
}
export interface EpochSpendingEntryProtoMsg {
  typeUrl: "/sparkdream.commons.v1.EpochSpendingEntry";
  value: Uint8Array;
}
/**
 * EpochSpendingEntry is one per-epoch spend bucket of a group policy.
 * @name EpochSpendingEntryAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.EpochSpendingEntry
 */
export interface EpochSpendingEntryAmino {
  policy_address?: string;
  epoch_day?: string;
  amount?: string;
}
export interface EpochSpendingEntryAminoMsg {
  type: "/sparkdream.commons.v1.EpochSpendingEntry";
  value: EpochSpendingEntryAmino;
}
/**
 * MarketToGroupEntry links a confidence-vote market to its group.
 * @name MarketToGroupEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MarketToGroupEntry
 */
export interface MarketToGroupEntry {
  marketId: bigint;
  groupName: string;
}
export interface MarketToGroupEntryProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MarketToGroupEntry";
  value: Uint8Array;
}
/**
 * MarketToGroupEntry links a confidence-vote market to its group.
 * @name MarketToGroupEntryAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MarketToGroupEntry
 */
export interface MarketToGroupEntryAmino {
  market_id?: string;
  group_name?: string;
}
export interface MarketToGroupEntryAminoMsg {
  type: "/sparkdream.commons.v1.MarketToGroupEntry";
  value: MarketToGroupEntryAmino;
}
/**
 * MarketTriggerEntry is one scheduled confidence-vote market.
 * @name MarketTriggerEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MarketTriggerEntry
 */
export interface MarketTriggerEntry {
  triggerTime: bigint;
  groupName: string;
}
export interface MarketTriggerEntryProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MarketTriggerEntry";
  value: Uint8Array;
}
/**
 * MarketTriggerEntry is one scheduled confidence-vote market.
 * @name MarketTriggerEntryAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MarketTriggerEntry
 */
export interface MarketTriggerEntryAmino {
  trigger_time?: string;
  group_name?: string;
}
export interface MarketTriggerEntryAminoMsg {
  type: "/sparkdream.commons.v1.MarketTriggerEntry";
  value: MarketTriggerEntryAmino;
}
/**
 * FoundingMember is one governance founding member for the InitGenesis
 * bootstrap: a seat on the founding councils, a seeded x/name display name,
 * and optionally pre-claimed x/name handles (first handle becomes primary).
 * Exactly one entry must set founder=true; that account additionally anchors
 * the Technical and Ecosystem councils and their committees.
 * @name FoundingMember
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.FoundingMember
 */
export interface FoundingMember {
  /**
   * address is the member's bech32 account address. The account must exist
   * in the auth genesis state or the bootstrap skips it.
   */
  address: string;
  /**
   * display_name is seeded as the x/name OwnerInfo display name and recorded
   * as membership metadata.
   */
  displayName: string;
  /**
   * handles are x/name handles claimed for this address at genesis; the
   * first one becomes the primary handle.
   */
  handles: string[];
  /**
   * founder marks the single founder account.
   */
  founder: boolean;
}
export interface FoundingMemberProtoMsg {
  typeUrl: "/sparkdream.commons.v1.FoundingMember";
  value: Uint8Array;
}
/**
 * FoundingMember is one governance founding member for the InitGenesis
 * bootstrap: a seat on the founding councils, a seeded x/name display name,
 * and optionally pre-claimed x/name handles (first handle becomes primary).
 * Exactly one entry must set founder=true; that account additionally anchors
 * the Technical and Ecosystem councils and their committees.
 * @name FoundingMemberAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.FoundingMember
 */
export interface FoundingMemberAmino {
  /**
   * address is the member's bech32 account address. The account must exist
   * in the auth genesis state or the bootstrap skips it.
   */
  address?: string;
  /**
   * display_name is seeded as the x/name OwnerInfo display name and recorded
   * as membership metadata.
   */
  display_name?: string;
  /**
   * handles are x/name handles claimed for this address at genesis; the
   * first one becomes the primary handle.
   */
  handles?: string[];
  /**
   * founder marks the single founder account.
   */
  founder?: boolean;
}
export interface FoundingMemberAminoMsg {
  type: "/sparkdream.commons.v1.FoundingMember";
  value: FoundingMemberAmino;
}
/**
 * CouncilMembers groups members by council name for genesis export.
 * @name CouncilMembers
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.CouncilMembers
 */
export interface CouncilMembers {
  councilName: string;
  members: Member[];
}
export interface CouncilMembersProtoMsg {
  typeUrl: "/sparkdream.commons.v1.CouncilMembers";
  value: Uint8Array;
}
/**
 * CouncilMembers groups members by council name for genesis export.
 * @name CouncilMembersAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.CouncilMembers
 */
export interface CouncilMembersAmino {
  council_name?: string;
  members?: MemberAmino[];
}
export interface CouncilMembersAminoMsg {
  type: "/sparkdream.commons.v1.CouncilMembers";
  value: CouncilMembersAmino;
}
/**
 * PolicyWithAddress pairs a policy address with its decision policy.
 * @name PolicyWithAddress
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyWithAddress
 */
export interface PolicyWithAddress {
  policyAddress: string;
  decisionPolicy: DecisionPolicy;
}
export interface PolicyWithAddressProtoMsg {
  typeUrl: "/sparkdream.commons.v1.PolicyWithAddress";
  value: Uint8Array;
}
/**
 * PolicyWithAddress pairs a policy address with its decision policy.
 * @name PolicyWithAddressAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyWithAddress
 */
export interface PolicyWithAddressAmino {
  policy_address?: string;
  decision_policy?: DecisionPolicyAmino;
}
export interface PolicyWithAddressAminoMsg {
  type: "/sparkdream.commons.v1.PolicyWithAddress";
  value: PolicyWithAddressAmino;
}
/**
 * PolicyVersionEntry pairs a policy address with its current version.
 * @name PolicyVersionEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyVersionEntry
 */
export interface PolicyVersionEntry {
  policyAddress: string;
  version: bigint;
}
export interface PolicyVersionEntryProtoMsg {
  typeUrl: "/sparkdream.commons.v1.PolicyVersionEntry";
  value: Uint8Array;
}
/**
 * PolicyVersionEntry pairs a policy address with its current version.
 * @name PolicyVersionEntryAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyVersionEntry
 */
export interface PolicyVersionEntryAmino {
  policy_address?: string;
  version?: string;
}
export interface PolicyVersionEntryAminoMsg {
  type: "/sparkdream.commons.v1.PolicyVersionEntry";
  value: PolicyVersionEntryAmino;
}
/**
 * ProposalVotes groups votes by proposal ID for genesis export.
 * @name ProposalVotes
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.ProposalVotes
 */
export interface ProposalVotes {
  proposalId: bigint;
  votes: Vote[];
}
export interface ProposalVotesProtoMsg {
  typeUrl: "/sparkdream.commons.v1.ProposalVotes";
  value: Uint8Array;
}
/**
 * ProposalVotes groups votes by proposal ID for genesis export.
 * @name ProposalVotesAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.ProposalVotes
 */
export interface ProposalVotesAmino {
  proposal_id?: string;
  votes?: VoteAmino[];
}
export interface ProposalVotesAminoMsg {
  type: "/sparkdream.commons.v1.ProposalVotes";
  value: ProposalVotesAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    policyPermissionsMap: [],
    groupMap: [],
    councilMembers: [],
    decisionPolicies: [],
    proposals: [],
    nextProposalId: BigInt(0),
    nextCouncilId: BigInt(0),
    policyVersions: [],
    proposalVotes: [],
    categoryMap: [],
    nextCategoryId: BigInt(0),
    foundingMembers: [],
    epochSpending: [],
    marketToGroup: [],
    marketTriggerQueue: [],
    deletedPolicies: [],
    anonVoteTallies: [],
    anonProposalCounts: [],
    polls: [],
    pollVotes: [],
    nextPollId: BigInt(0),
    proposalVoterTrees: [],
    pollVoterTrees: [],
    pollOpenCounts: [],
    treasuryWindDowns: [],
    treasuryStakers: []
  };
}
/**
 * GenesisState defines the commons module's genesis state.
 * @name GenesisState
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.commons.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.policyPermissionsMap) {
      PolicyPermissions.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.groupMap) {
      Group.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.councilMembers) {
      CouncilMembers.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.decisionPolicies) {
      PolicyWithAddress.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextProposalId !== BigInt(0)) {
      writer.uint32(56).uint64(message.nextProposalId);
    }
    if (message.nextCouncilId !== BigInt(0)) {
      writer.uint32(64).uint64(message.nextCouncilId);
    }
    for (const v of message.policyVersions) {
      PolicyVersionEntry.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.proposalVotes) {
      ProposalVotes.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.categoryMap) {
      Category.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.nextCategoryId !== BigInt(0)) {
      writer.uint32(96).uint64(message.nextCategoryId);
    }
    for (const v of message.foundingMembers) {
      FoundingMember.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.epochSpending) {
      EpochSpendingEntry.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.marketToGroup) {
      MarketToGroupEntry.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.marketTriggerQueue) {
      MarketTriggerEntry.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.deletedPolicies) {
      writer.uint32(138).string(v!);
    }
    for (const v of message.anonVoteTallies) {
      AnonVoteTallyEntry.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.anonProposalCounts) {
      AnonProposalCountEntry.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.polls) {
      Poll.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.pollVotes) {
      PollVote.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.nextPollId !== BigInt(0)) {
      writer.uint32(176).uint64(message.nextPollId);
    }
    for (const v of message.proposalVoterTrees) {
      ProposalVoterTreeEntry.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.pollVoterTrees) {
      PollVoterTreeEntry.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.pollOpenCounts) {
      PollOpenCount.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    for (const v of message.treasuryWindDowns) {
      TreasuryWindDown.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    for (const v of message.treasuryStakers) {
      writer.uint32(218).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.policyPermissionsMap.push(PolicyPermissions.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMap.push(Group.decode(reader, reader.uint32()));
          break;
        case 4:
          message.councilMembers.push(CouncilMembers.decode(reader, reader.uint32()));
          break;
        case 5:
          message.decisionPolicies.push(PolicyWithAddress.decode(reader, reader.uint32()));
          break;
        case 6:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nextProposalId = reader.uint64();
          break;
        case 8:
          message.nextCouncilId = reader.uint64();
          break;
        case 9:
          message.policyVersions.push(PolicyVersionEntry.decode(reader, reader.uint32()));
          break;
        case 10:
          message.proposalVotes.push(ProposalVotes.decode(reader, reader.uint32()));
          break;
        case 11:
          message.categoryMap.push(Category.decode(reader, reader.uint32()));
          break;
        case 12:
          message.nextCategoryId = reader.uint64();
          break;
        case 13:
          message.foundingMembers.push(FoundingMember.decode(reader, reader.uint32()));
          break;
        case 14:
          message.epochSpending.push(EpochSpendingEntry.decode(reader, reader.uint32()));
          break;
        case 15:
          message.marketToGroup.push(MarketToGroupEntry.decode(reader, reader.uint32()));
          break;
        case 16:
          message.marketTriggerQueue.push(MarketTriggerEntry.decode(reader, reader.uint32()));
          break;
        case 17:
          message.deletedPolicies.push(reader.string());
          break;
        case 18:
          message.anonVoteTallies.push(AnonVoteTallyEntry.decode(reader, reader.uint32()));
          break;
        case 19:
          message.anonProposalCounts.push(AnonProposalCountEntry.decode(reader, reader.uint32()));
          break;
        case 20:
          message.polls.push(Poll.decode(reader, reader.uint32()));
          break;
        case 21:
          message.pollVotes.push(PollVote.decode(reader, reader.uint32()));
          break;
        case 22:
          message.nextPollId = reader.uint64();
          break;
        case 23:
          message.proposalVoterTrees.push(ProposalVoterTreeEntry.decode(reader, reader.uint32()));
          break;
        case 24:
          message.pollVoterTrees.push(PollVoterTreeEntry.decode(reader, reader.uint32()));
          break;
        case 25:
          message.pollOpenCounts.push(PollOpenCount.decode(reader, reader.uint32()));
          break;
        case 26:
          message.treasuryWindDowns.push(TreasuryWindDown.decode(reader, reader.uint32()));
          break;
        case 27:
          message.treasuryStakers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.policyPermissionsMap = object.policyPermissionsMap?.map(e => PolicyPermissions.fromPartial(e)) || [];
    message.groupMap = object.groupMap?.map(e => Group.fromPartial(e)) || [];
    message.councilMembers = object.councilMembers?.map(e => CouncilMembers.fromPartial(e)) || [];
    message.decisionPolicies = object.decisionPolicies?.map(e => PolicyWithAddress.fromPartial(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.nextProposalId = object.nextProposalId !== undefined && object.nextProposalId !== null ? BigInt(object.nextProposalId.toString()) : BigInt(0);
    message.nextCouncilId = object.nextCouncilId !== undefined && object.nextCouncilId !== null ? BigInt(object.nextCouncilId.toString()) : BigInt(0);
    message.policyVersions = object.policyVersions?.map(e => PolicyVersionEntry.fromPartial(e)) || [];
    message.proposalVotes = object.proposalVotes?.map(e => ProposalVotes.fromPartial(e)) || [];
    message.categoryMap = object.categoryMap?.map(e => Category.fromPartial(e)) || [];
    message.nextCategoryId = object.nextCategoryId !== undefined && object.nextCategoryId !== null ? BigInt(object.nextCategoryId.toString()) : BigInt(0);
    message.foundingMembers = object.foundingMembers?.map(e => FoundingMember.fromPartial(e)) || [];
    message.epochSpending = object.epochSpending?.map(e => EpochSpendingEntry.fromPartial(e)) || [];
    message.marketToGroup = object.marketToGroup?.map(e => MarketToGroupEntry.fromPartial(e)) || [];
    message.marketTriggerQueue = object.marketTriggerQueue?.map(e => MarketTriggerEntry.fromPartial(e)) || [];
    message.deletedPolicies = object.deletedPolicies?.map(e => e) || [];
    message.anonVoteTallies = object.anonVoteTallies?.map(e => AnonVoteTallyEntry.fromPartial(e)) || [];
    message.anonProposalCounts = object.anonProposalCounts?.map(e => AnonProposalCountEntry.fromPartial(e)) || [];
    message.polls = object.polls?.map(e => Poll.fromPartial(e)) || [];
    message.pollVotes = object.pollVotes?.map(e => PollVote.fromPartial(e)) || [];
    message.nextPollId = object.nextPollId !== undefined && object.nextPollId !== null ? BigInt(object.nextPollId.toString()) : BigInt(0);
    message.proposalVoterTrees = object.proposalVoterTrees?.map(e => ProposalVoterTreeEntry.fromPartial(e)) || [];
    message.pollVoterTrees = object.pollVoterTrees?.map(e => PollVoterTreeEntry.fromPartial(e)) || [];
    message.pollOpenCounts = object.pollOpenCounts?.map(e => PollOpenCount.fromPartial(e)) || [];
    message.treasuryWindDowns = object.treasuryWindDowns?.map(e => TreasuryWindDown.fromPartial(e)) || [];
    message.treasuryStakers = object.treasuryStakers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.policyPermissionsMap = object.policy_permissions_map?.map(e => PolicyPermissions.fromAmino(e)) || [];
    message.groupMap = object.group_map?.map(e => Group.fromAmino(e)) || [];
    message.councilMembers = object.council_members?.map(e => CouncilMembers.fromAmino(e)) || [];
    message.decisionPolicies = object.decision_policies?.map(e => PolicyWithAddress.fromAmino(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.next_proposal_id !== undefined && object.next_proposal_id !== null) {
      message.nextProposalId = BigInt(object.next_proposal_id);
    }
    if (object.next_council_id !== undefined && object.next_council_id !== null) {
      message.nextCouncilId = BigInt(object.next_council_id);
    }
    message.policyVersions = object.policy_versions?.map(e => PolicyVersionEntry.fromAmino(e)) || [];
    message.proposalVotes = object.proposal_votes?.map(e => ProposalVotes.fromAmino(e)) || [];
    message.categoryMap = object.category_map?.map(e => Category.fromAmino(e)) || [];
    if (object.next_category_id !== undefined && object.next_category_id !== null) {
      message.nextCategoryId = BigInt(object.next_category_id);
    }
    message.foundingMembers = object.founding_members?.map(e => FoundingMember.fromAmino(e)) || [];
    message.epochSpending = object.epoch_spending?.map(e => EpochSpendingEntry.fromAmino(e)) || [];
    message.marketToGroup = object.market_to_group?.map(e => MarketToGroupEntry.fromAmino(e)) || [];
    message.marketTriggerQueue = object.market_trigger_queue?.map(e => MarketTriggerEntry.fromAmino(e)) || [];
    message.deletedPolicies = object.deleted_policies?.map(e => e) || [];
    message.anonVoteTallies = object.anon_vote_tallies?.map(e => AnonVoteTallyEntry.fromAmino(e)) || [];
    message.anonProposalCounts = object.anon_proposal_counts?.map(e => AnonProposalCountEntry.fromAmino(e)) || [];
    message.polls = object.polls?.map(e => Poll.fromAmino(e)) || [];
    message.pollVotes = object.poll_votes?.map(e => PollVote.fromAmino(e)) || [];
    if (object.next_poll_id !== undefined && object.next_poll_id !== null) {
      message.nextPollId = BigInt(object.next_poll_id);
    }
    message.proposalVoterTrees = object.proposal_voter_trees?.map(e => ProposalVoterTreeEntry.fromAmino(e)) || [];
    message.pollVoterTrees = object.poll_voter_trees?.map(e => PollVoterTreeEntry.fromAmino(e)) || [];
    message.pollOpenCounts = object.poll_open_counts?.map(e => PollOpenCount.fromAmino(e)) || [];
    message.treasuryWindDowns = object.treasury_wind_downs?.map(e => TreasuryWindDown.fromAmino(e)) || [];
    message.treasuryStakers = object.treasury_stakers?.map(e => e) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.policyPermissionsMap) {
      obj.policy_permissions_map = message.policyPermissionsMap.map(e => e ? PolicyPermissions.toAmino(e) : undefined);
    } else {
      obj.policy_permissions_map = message.policyPermissionsMap;
    }
    if (message.groupMap) {
      obj.group_map = message.groupMap.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.group_map = message.groupMap;
    }
    if (message.councilMembers) {
      obj.council_members = message.councilMembers.map(e => e ? CouncilMembers.toAmino(e) : undefined);
    } else {
      obj.council_members = message.councilMembers;
    }
    if (message.decisionPolicies) {
      obj.decision_policies = message.decisionPolicies.map(e => e ? PolicyWithAddress.toAmino(e) : undefined);
    } else {
      obj.decision_policies = message.decisionPolicies;
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.next_proposal_id = message.nextProposalId !== BigInt(0) ? message.nextProposalId?.toString() : undefined;
    obj.next_council_id = message.nextCouncilId !== BigInt(0) ? message.nextCouncilId?.toString() : undefined;
    if (message.policyVersions) {
      obj.policy_versions = message.policyVersions.map(e => e ? PolicyVersionEntry.toAmino(e) : undefined);
    } else {
      obj.policy_versions = message.policyVersions;
    }
    if (message.proposalVotes) {
      obj.proposal_votes = message.proposalVotes.map(e => e ? ProposalVotes.toAmino(e) : undefined);
    } else {
      obj.proposal_votes = message.proposalVotes;
    }
    if (message.categoryMap) {
      obj.category_map = message.categoryMap.map(e => e ? Category.toAmino(e) : undefined);
    } else {
      obj.category_map = message.categoryMap;
    }
    obj.next_category_id = message.nextCategoryId !== BigInt(0) ? message.nextCategoryId?.toString() : undefined;
    if (message.foundingMembers) {
      obj.founding_members = message.foundingMembers.map(e => e ? FoundingMember.toAmino(e) : undefined);
    } else {
      obj.founding_members = message.foundingMembers;
    }
    if (message.epochSpending) {
      obj.epoch_spending = message.epochSpending.map(e => e ? EpochSpendingEntry.toAmino(e) : undefined);
    } else {
      obj.epoch_spending = message.epochSpending;
    }
    if (message.marketToGroup) {
      obj.market_to_group = message.marketToGroup.map(e => e ? MarketToGroupEntry.toAmino(e) : undefined);
    } else {
      obj.market_to_group = message.marketToGroup;
    }
    if (message.marketTriggerQueue) {
      obj.market_trigger_queue = message.marketTriggerQueue.map(e => e ? MarketTriggerEntry.toAmino(e) : undefined);
    } else {
      obj.market_trigger_queue = message.marketTriggerQueue;
    }
    if (message.deletedPolicies) {
      obj.deleted_policies = message.deletedPolicies.map(e => e);
    } else {
      obj.deleted_policies = message.deletedPolicies;
    }
    if (message.anonVoteTallies) {
      obj.anon_vote_tallies = message.anonVoteTallies.map(e => e ? AnonVoteTallyEntry.toAmino(e) : undefined);
    } else {
      obj.anon_vote_tallies = message.anonVoteTallies;
    }
    if (message.anonProposalCounts) {
      obj.anon_proposal_counts = message.anonProposalCounts.map(e => e ? AnonProposalCountEntry.toAmino(e) : undefined);
    } else {
      obj.anon_proposal_counts = message.anonProposalCounts;
    }
    if (message.polls) {
      obj.polls = message.polls.map(e => e ? Poll.toAmino(e) : undefined);
    } else {
      obj.polls = message.polls;
    }
    if (message.pollVotes) {
      obj.poll_votes = message.pollVotes.map(e => e ? PollVote.toAmino(e) : undefined);
    } else {
      obj.poll_votes = message.pollVotes;
    }
    obj.next_poll_id = message.nextPollId !== BigInt(0) ? message.nextPollId?.toString() : undefined;
    if (message.proposalVoterTrees) {
      obj.proposal_voter_trees = message.proposalVoterTrees.map(e => e ? ProposalVoterTreeEntry.toAmino(e) : undefined);
    } else {
      obj.proposal_voter_trees = message.proposalVoterTrees;
    }
    if (message.pollVoterTrees) {
      obj.poll_voter_trees = message.pollVoterTrees.map(e => e ? PollVoterTreeEntry.toAmino(e) : undefined);
    } else {
      obj.poll_voter_trees = message.pollVoterTrees;
    }
    if (message.pollOpenCounts) {
      obj.poll_open_counts = message.pollOpenCounts.map(e => e ? PollOpenCount.toAmino(e) : undefined);
    } else {
      obj.poll_open_counts = message.pollOpenCounts;
    }
    if (message.treasuryWindDowns) {
      obj.treasury_wind_downs = message.treasuryWindDowns.map(e => e ? TreasuryWindDown.toAmino(e) : undefined);
    } else {
      obj.treasury_wind_downs = message.treasuryWindDowns;
    }
    if (message.treasuryStakers) {
      obj.treasury_stakers = message.treasuryStakers.map(e => e);
    } else {
      obj.treasury_stakers = message.treasuryStakers;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseTreasuryWindDown(): TreasuryWindDown {
  return {
    policyAddress: "",
    heir: "",
    due: BigInt(0)
  };
}
/**
 * TreasuryWindDown is the pending unwinding of a deleted group's treasury
 * stake: the EndBlocker undelegates what is still staked, waits for the
 * unbonding entries to mature and then sweeps the balance to the heir.
 * @name TreasuryWindDown
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.TreasuryWindDown
 */
export const TreasuryWindDown = {
  typeUrl: "/sparkdream.commons.v1.TreasuryWindDown",
  encode(message: TreasuryWindDown, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policyAddress !== "") {
      writer.uint32(10).string(message.policyAddress);
    }
    if (message.heir !== "") {
      writer.uint32(18).string(message.heir);
    }
    if (message.due !== BigInt(0)) {
      writer.uint32(24).int64(message.due);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TreasuryWindDown {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTreasuryWindDown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyAddress = reader.string();
          break;
        case 2:
          message.heir = reader.string();
          break;
        case 3:
          message.due = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TreasuryWindDown>): TreasuryWindDown {
    const message = createBaseTreasuryWindDown();
    message.policyAddress = object.policyAddress ?? "";
    message.heir = object.heir ?? "";
    message.due = object.due !== undefined && object.due !== null ? BigInt(object.due.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TreasuryWindDownAmino): TreasuryWindDown {
    const message = createBaseTreasuryWindDown();
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    if (object.heir !== undefined && object.heir !== null) {
      message.heir = object.heir;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = BigInt(object.due);
    }
    return message;
  },
  toAmino(message: TreasuryWindDown): TreasuryWindDownAmino {
    const obj: any = {};
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    obj.heir = message.heir === "" ? undefined : message.heir;
    obj.due = message.due !== BigInt(0) ? message.due?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TreasuryWindDownAminoMsg): TreasuryWindDown {
    return TreasuryWindDown.fromAmino(object.value);
  },
  fromProtoMsg(message: TreasuryWindDownProtoMsg): TreasuryWindDown {
    return TreasuryWindDown.decode(message.value);
  },
  toProto(message: TreasuryWindDown): Uint8Array {
    return TreasuryWindDown.encode(message).finish();
  },
  toProtoMsg(message: TreasuryWindDown): TreasuryWindDownProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.TreasuryWindDown",
      value: TreasuryWindDown.encode(message).finish()
    };
  }
};
function createBaseProposalVoterTreeEntry(): ProposalVoterTreeEntry {
  return {
    proposalId: BigInt(0),
    tree: VoterTree.fromPartial({})
  };
}
/**
 * ProposalVoterTreeEntry pairs a proposal ID with its voter snapshot.
 * @name ProposalVoterTreeEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.ProposalVoterTreeEntry
 */
export const ProposalVoterTreeEntry = {
  typeUrl: "/sparkdream.commons.v1.ProposalVoterTreeEntry",
  encode(message: ProposalVoterTreeEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.tree !== undefined) {
      VoterTree.encode(message.tree, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalVoterTreeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalVoterTreeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.tree = VoterTree.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProposalVoterTreeEntry>): ProposalVoterTreeEntry {
    const message = createBaseProposalVoterTreeEntry();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.tree = object.tree !== undefined && object.tree !== null ? VoterTree.fromPartial(object.tree) : undefined;
    return message;
  },
  fromAmino(object: ProposalVoterTreeEntryAmino): ProposalVoterTreeEntry {
    const message = createBaseProposalVoterTreeEntry();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.tree !== undefined && object.tree !== null) {
      message.tree = VoterTree.fromAmino(object.tree);
    }
    return message;
  },
  toAmino(message: ProposalVoterTreeEntry): ProposalVoterTreeEntryAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.tree = message.tree ? VoterTree.toAmino(message.tree) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProposalVoterTreeEntryAminoMsg): ProposalVoterTreeEntry {
    return ProposalVoterTreeEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalVoterTreeEntryProtoMsg): ProposalVoterTreeEntry {
    return ProposalVoterTreeEntry.decode(message.value);
  },
  toProto(message: ProposalVoterTreeEntry): Uint8Array {
    return ProposalVoterTreeEntry.encode(message).finish();
  },
  toProtoMsg(message: ProposalVoterTreeEntry): ProposalVoterTreeEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.ProposalVoterTreeEntry",
      value: ProposalVoterTreeEntry.encode(message).finish()
    };
  }
};
function createBasePollVoterTreeEntry(): PollVoterTreeEntry {
  return {
    pollId: BigInt(0),
    tree: VoterTree.fromPartial({})
  };
}
/**
 * PollVoterTreeEntry pairs a poll ID with its voter snapshot.
 * @name PollVoterTreeEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PollVoterTreeEntry
 */
export const PollVoterTreeEntry = {
  typeUrl: "/sparkdream.commons.v1.PollVoterTreeEntry",
  encode(message: PollVoterTreeEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pollId !== BigInt(0)) {
      writer.uint32(8).uint64(message.pollId);
    }
    if (message.tree !== undefined) {
      VoterTree.encode(message.tree, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PollVoterTreeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePollVoterTreeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pollId = reader.uint64();
          break;
        case 2:
          message.tree = VoterTree.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PollVoterTreeEntry>): PollVoterTreeEntry {
    const message = createBasePollVoterTreeEntry();
    message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
    message.tree = object.tree !== undefined && object.tree !== null ? VoterTree.fromPartial(object.tree) : undefined;
    return message;
  },
  fromAmino(object: PollVoterTreeEntryAmino): PollVoterTreeEntry {
    const message = createBasePollVoterTreeEntry();
    if (object.poll_id !== undefined && object.poll_id !== null) {
      message.pollId = BigInt(object.poll_id);
    }
    if (object.tree !== undefined && object.tree !== null) {
      message.tree = VoterTree.fromAmino(object.tree);
    }
    return message;
  },
  toAmino(message: PollVoterTreeEntry): PollVoterTreeEntryAmino {
    const obj: any = {};
    obj.poll_id = message.pollId !== BigInt(0) ? message.pollId?.toString() : undefined;
    obj.tree = message.tree ? VoterTree.toAmino(message.tree) : undefined;
    return obj;
  },
  fromAminoMsg(object: PollVoterTreeEntryAminoMsg): PollVoterTreeEntry {
    return PollVoterTreeEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PollVoterTreeEntryProtoMsg): PollVoterTreeEntry {
    return PollVoterTreeEntry.decode(message.value);
  },
  toProto(message: PollVoterTreeEntry): Uint8Array {
    return PollVoterTreeEntry.encode(message).finish();
  },
  toProtoMsg(message: PollVoterTreeEntry): PollVoterTreeEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.PollVoterTreeEntry",
      value: PollVoterTreeEntry.encode(message).finish()
    };
  }
};
function createBaseAnonVoteTallyEntry(): AnonVoteTallyEntry {
  return {
    proposalId: BigInt(0),
    tally: AnonVoteTally.fromPartial({})
  };
}
/**
 * AnonVoteTallyEntry pairs a proposal ID with its anonymous vote tally.
 * @name AnonVoteTallyEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.AnonVoteTallyEntry
 */
export const AnonVoteTallyEntry = {
  typeUrl: "/sparkdream.commons.v1.AnonVoteTallyEntry",
  encode(message: AnonVoteTallyEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.tally !== undefined) {
      AnonVoteTally.encode(message.tally, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AnonVoteTallyEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnonVoteTallyEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.tally = AnonVoteTally.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AnonVoteTallyEntry>): AnonVoteTallyEntry {
    const message = createBaseAnonVoteTallyEntry();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.tally = object.tally !== undefined && object.tally !== null ? AnonVoteTally.fromPartial(object.tally) : undefined;
    return message;
  },
  fromAmino(object: AnonVoteTallyEntryAmino): AnonVoteTallyEntry {
    const message = createBaseAnonVoteTallyEntry();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = AnonVoteTally.fromAmino(object.tally);
    }
    return message;
  },
  toAmino(message: AnonVoteTallyEntry): AnonVoteTallyEntryAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.tally = message.tally ? AnonVoteTally.toAmino(message.tally) : undefined;
    return obj;
  },
  fromAminoMsg(object: AnonVoteTallyEntryAminoMsg): AnonVoteTallyEntry {
    return AnonVoteTallyEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: AnonVoteTallyEntryProtoMsg): AnonVoteTallyEntry {
    return AnonVoteTallyEntry.decode(message.value);
  },
  toProto(message: AnonVoteTallyEntry): Uint8Array {
    return AnonVoteTallyEntry.encode(message).finish();
  },
  toProtoMsg(message: AnonVoteTallyEntry): AnonVoteTallyEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.AnonVoteTallyEntry",
      value: AnonVoteTallyEntry.encode(message).finish()
    };
  }
};
function createBaseAnonProposalCountEntry(): AnonProposalCountEntry {
  return {
    councilName: "",
    utcDay: BigInt(0),
    count: BigInt(0)
  };
}
/**
 * AnonProposalCountEntry is one per-(council, UTC day) anonymous proposal
 * counter.
 * @name AnonProposalCountEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.AnonProposalCountEntry
 */
export const AnonProposalCountEntry = {
  typeUrl: "/sparkdream.commons.v1.AnonProposalCountEntry",
  encode(message: AnonProposalCountEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.councilName !== "") {
      writer.uint32(10).string(message.councilName);
    }
    if (message.utcDay !== BigInt(0)) {
      writer.uint32(16).int64(message.utcDay);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(24).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AnonProposalCountEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnonProposalCountEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.councilName = reader.string();
          break;
        case 2:
          message.utcDay = reader.int64();
          break;
        case 3:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AnonProposalCountEntry>): AnonProposalCountEntry {
    const message = createBaseAnonProposalCountEntry();
    message.councilName = object.councilName ?? "";
    message.utcDay = object.utcDay !== undefined && object.utcDay !== null ? BigInt(object.utcDay.toString()) : BigInt(0);
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AnonProposalCountEntryAmino): AnonProposalCountEntry {
    const message = createBaseAnonProposalCountEntry();
    if (object.council_name !== undefined && object.council_name !== null) {
      message.councilName = object.council_name;
    }
    if (object.utc_day !== undefined && object.utc_day !== null) {
      message.utcDay = BigInt(object.utc_day);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: AnonProposalCountEntry): AnonProposalCountEntryAmino {
    const obj: any = {};
    obj.council_name = message.councilName === "" ? undefined : message.councilName;
    obj.utc_day = message.utcDay !== BigInt(0) ? message.utcDay?.toString() : undefined;
    obj.count = message.count !== BigInt(0) ? message.count?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AnonProposalCountEntryAminoMsg): AnonProposalCountEntry {
    return AnonProposalCountEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: AnonProposalCountEntryProtoMsg): AnonProposalCountEntry {
    return AnonProposalCountEntry.decode(message.value);
  },
  toProto(message: AnonProposalCountEntry): Uint8Array {
    return AnonProposalCountEntry.encode(message).finish();
  },
  toProtoMsg(message: AnonProposalCountEntry): AnonProposalCountEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.AnonProposalCountEntry",
      value: AnonProposalCountEntry.encode(message).finish()
    };
  }
};
function createBaseEpochSpendingEntry(): EpochSpendingEntry {
  return {
    policyAddress: "",
    epochDay: BigInt(0),
    amount: ""
  };
}
/**
 * EpochSpendingEntry is one per-epoch spend bucket of a group policy.
 * @name EpochSpendingEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.EpochSpendingEntry
 */
export const EpochSpendingEntry = {
  typeUrl: "/sparkdream.commons.v1.EpochSpendingEntry",
  encode(message: EpochSpendingEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policyAddress !== "") {
      writer.uint32(10).string(message.policyAddress);
    }
    if (message.epochDay !== BigInt(0)) {
      writer.uint32(16).int64(message.epochDay);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochSpendingEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochSpendingEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyAddress = reader.string();
          break;
        case 2:
          message.epochDay = reader.int64();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EpochSpendingEntry>): EpochSpendingEntry {
    const message = createBaseEpochSpendingEntry();
    message.policyAddress = object.policyAddress ?? "";
    message.epochDay = object.epochDay !== undefined && object.epochDay !== null ? BigInt(object.epochDay.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EpochSpendingEntryAmino): EpochSpendingEntry {
    const message = createBaseEpochSpendingEntry();
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    if (object.epoch_day !== undefined && object.epoch_day !== null) {
      message.epochDay = BigInt(object.epoch_day);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EpochSpendingEntry): EpochSpendingEntryAmino {
    const obj: any = {};
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    obj.epoch_day = message.epochDay !== BigInt(0) ? message.epochDay?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: EpochSpendingEntryAminoMsg): EpochSpendingEntry {
    return EpochSpendingEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochSpendingEntryProtoMsg): EpochSpendingEntry {
    return EpochSpendingEntry.decode(message.value);
  },
  toProto(message: EpochSpendingEntry): Uint8Array {
    return EpochSpendingEntry.encode(message).finish();
  },
  toProtoMsg(message: EpochSpendingEntry): EpochSpendingEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.EpochSpendingEntry",
      value: EpochSpendingEntry.encode(message).finish()
    };
  }
};
function createBaseMarketToGroupEntry(): MarketToGroupEntry {
  return {
    marketId: BigInt(0),
    groupName: ""
  };
}
/**
 * MarketToGroupEntry links a confidence-vote market to its group.
 * @name MarketToGroupEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MarketToGroupEntry
 */
export const MarketToGroupEntry = {
  typeUrl: "/sparkdream.commons.v1.MarketToGroupEntry",
  encode(message: MarketToGroupEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== BigInt(0)) {
      writer.uint32(8).uint64(message.marketId);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketToGroupEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketToGroupEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.uint64();
          break;
        case 2:
          message.groupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MarketToGroupEntry>): MarketToGroupEntry {
    const message = createBaseMarketToGroupEntry();
    message.marketId = object.marketId !== undefined && object.marketId !== null ? BigInt(object.marketId.toString()) : BigInt(0);
    message.groupName = object.groupName ?? "";
    return message;
  },
  fromAmino(object: MarketToGroupEntryAmino): MarketToGroupEntry {
    const message = createBaseMarketToGroupEntry();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = BigInt(object.market_id);
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    return message;
  },
  toAmino(message: MarketToGroupEntry): MarketToGroupEntryAmino {
    const obj: any = {};
    obj.market_id = message.marketId !== BigInt(0) ? message.marketId?.toString() : undefined;
    obj.group_name = message.groupName === "" ? undefined : message.groupName;
    return obj;
  },
  fromAminoMsg(object: MarketToGroupEntryAminoMsg): MarketToGroupEntry {
    return MarketToGroupEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketToGroupEntryProtoMsg): MarketToGroupEntry {
    return MarketToGroupEntry.decode(message.value);
  },
  toProto(message: MarketToGroupEntry): Uint8Array {
    return MarketToGroupEntry.encode(message).finish();
  },
  toProtoMsg(message: MarketToGroupEntry): MarketToGroupEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MarketToGroupEntry",
      value: MarketToGroupEntry.encode(message).finish()
    };
  }
};
function createBaseMarketTriggerEntry(): MarketTriggerEntry {
  return {
    triggerTime: BigInt(0),
    groupName: ""
  };
}
/**
 * MarketTriggerEntry is one scheduled confidence-vote market.
 * @name MarketTriggerEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MarketTriggerEntry
 */
export const MarketTriggerEntry = {
  typeUrl: "/sparkdream.commons.v1.MarketTriggerEntry",
  encode(message: MarketTriggerEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.triggerTime !== BigInt(0)) {
      writer.uint32(8).int64(message.triggerTime);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketTriggerEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketTriggerEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerTime = reader.int64();
          break;
        case 2:
          message.groupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MarketTriggerEntry>): MarketTriggerEntry {
    const message = createBaseMarketTriggerEntry();
    message.triggerTime = object.triggerTime !== undefined && object.triggerTime !== null ? BigInt(object.triggerTime.toString()) : BigInt(0);
    message.groupName = object.groupName ?? "";
    return message;
  },
  fromAmino(object: MarketTriggerEntryAmino): MarketTriggerEntry {
    const message = createBaseMarketTriggerEntry();
    if (object.trigger_time !== undefined && object.trigger_time !== null) {
      message.triggerTime = BigInt(object.trigger_time);
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    return message;
  },
  toAmino(message: MarketTriggerEntry): MarketTriggerEntryAmino {
    const obj: any = {};
    obj.trigger_time = message.triggerTime !== BigInt(0) ? message.triggerTime?.toString() : undefined;
    obj.group_name = message.groupName === "" ? undefined : message.groupName;
    return obj;
  },
  fromAminoMsg(object: MarketTriggerEntryAminoMsg): MarketTriggerEntry {
    return MarketTriggerEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketTriggerEntryProtoMsg): MarketTriggerEntry {
    return MarketTriggerEntry.decode(message.value);
  },
  toProto(message: MarketTriggerEntry): Uint8Array {
    return MarketTriggerEntry.encode(message).finish();
  },
  toProtoMsg(message: MarketTriggerEntry): MarketTriggerEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MarketTriggerEntry",
      value: MarketTriggerEntry.encode(message).finish()
    };
  }
};
function createBaseFoundingMember(): FoundingMember {
  return {
    address: "",
    displayName: "",
    handles: [],
    founder: false
  };
}
/**
 * FoundingMember is one governance founding member for the InitGenesis
 * bootstrap: a seat on the founding councils, a seeded x/name display name,
 * and optionally pre-claimed x/name handles (first handle becomes primary).
 * Exactly one entry must set founder=true; that account additionally anchors
 * the Technical and Ecosystem councils and their committees.
 * @name FoundingMember
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.FoundingMember
 */
export const FoundingMember = {
  typeUrl: "/sparkdream.commons.v1.FoundingMember",
  encode(message: FoundingMember, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    for (const v of message.handles) {
      writer.uint32(26).string(v!);
    }
    if (message.founder === true) {
      writer.uint32(32).bool(message.founder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FoundingMember {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFoundingMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.handles.push(reader.string());
          break;
        case 4:
          message.founder = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FoundingMember>): FoundingMember {
    const message = createBaseFoundingMember();
    message.address = object.address ?? "";
    message.displayName = object.displayName ?? "";
    message.handles = object.handles?.map(e => e) || [];
    message.founder = object.founder ?? false;
    return message;
  },
  fromAmino(object: FoundingMemberAmino): FoundingMember {
    const message = createBaseFoundingMember();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.displayName = object.display_name;
    }
    message.handles = object.handles?.map(e => e) || [];
    if (object.founder !== undefined && object.founder !== null) {
      message.founder = object.founder;
    }
    return message;
  },
  toAmino(message: FoundingMember): FoundingMemberAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.display_name = message.displayName === "" ? undefined : message.displayName;
    if (message.handles) {
      obj.handles = message.handles.map(e => e);
    } else {
      obj.handles = message.handles;
    }
    obj.founder = message.founder === false ? undefined : message.founder;
    return obj;
  },
  fromAminoMsg(object: FoundingMemberAminoMsg): FoundingMember {
    return FoundingMember.fromAmino(object.value);
  },
  fromProtoMsg(message: FoundingMemberProtoMsg): FoundingMember {
    return FoundingMember.decode(message.value);
  },
  toProto(message: FoundingMember): Uint8Array {
    return FoundingMember.encode(message).finish();
  },
  toProtoMsg(message: FoundingMember): FoundingMemberProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.FoundingMember",
      value: FoundingMember.encode(message).finish()
    };
  }
};
function createBaseCouncilMembers(): CouncilMembers {
  return {
    councilName: "",
    members: []
  };
}
/**
 * CouncilMembers groups members by council name for genesis export.
 * @name CouncilMembers
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.CouncilMembers
 */
export const CouncilMembers = {
  typeUrl: "/sparkdream.commons.v1.CouncilMembers",
  encode(message: CouncilMembers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.councilName !== "") {
      writer.uint32(10).string(message.councilName);
    }
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CouncilMembers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCouncilMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.councilName = reader.string();
          break;
        case 2:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CouncilMembers>): CouncilMembers {
    const message = createBaseCouncilMembers();
    message.councilName = object.councilName ?? "";
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CouncilMembersAmino): CouncilMembers {
    const message = createBaseCouncilMembers();
    if (object.council_name !== undefined && object.council_name !== null) {
      message.councilName = object.council_name;
    }
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CouncilMembers): CouncilMembersAmino {
    const obj: any = {};
    obj.council_name = message.councilName === "" ? undefined : message.councilName;
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    return obj;
  },
  fromAminoMsg(object: CouncilMembersAminoMsg): CouncilMembers {
    return CouncilMembers.fromAmino(object.value);
  },
  fromProtoMsg(message: CouncilMembersProtoMsg): CouncilMembers {
    return CouncilMembers.decode(message.value);
  },
  toProto(message: CouncilMembers): Uint8Array {
    return CouncilMembers.encode(message).finish();
  },
  toProtoMsg(message: CouncilMembers): CouncilMembersProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.CouncilMembers",
      value: CouncilMembers.encode(message).finish()
    };
  }
};
function createBasePolicyWithAddress(): PolicyWithAddress {
  return {
    policyAddress: "",
    decisionPolicy: DecisionPolicy.fromPartial({})
  };
}
/**
 * PolicyWithAddress pairs a policy address with its decision policy.
 * @name PolicyWithAddress
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyWithAddress
 */
export const PolicyWithAddress = {
  typeUrl: "/sparkdream.commons.v1.PolicyWithAddress",
  encode(message: PolicyWithAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policyAddress !== "") {
      writer.uint32(10).string(message.policyAddress);
    }
    if (message.decisionPolicy !== undefined) {
      DecisionPolicy.encode(message.decisionPolicy, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PolicyWithAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyWithAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyAddress = reader.string();
          break;
        case 2:
          message.decisionPolicy = DecisionPolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PolicyWithAddress>): PolicyWithAddress {
    const message = createBasePolicyWithAddress();
    message.policyAddress = object.policyAddress ?? "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? DecisionPolicy.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },
  fromAmino(object: PolicyWithAddressAmino): PolicyWithAddress {
    const message = createBasePolicyWithAddress();
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    if (object.decision_policy !== undefined && object.decision_policy !== null) {
      message.decisionPolicy = DecisionPolicy.fromAmino(object.decision_policy);
    }
    return message;
  },
  toAmino(message: PolicyWithAddress): PolicyWithAddressAmino {
    const obj: any = {};
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    obj.decision_policy = message.decisionPolicy ? DecisionPolicy.toAmino(message.decisionPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object: PolicyWithAddressAminoMsg): PolicyWithAddress {
    return PolicyWithAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: PolicyWithAddressProtoMsg): PolicyWithAddress {
    return PolicyWithAddress.decode(message.value);
  },
  toProto(message: PolicyWithAddress): Uint8Array {
    return PolicyWithAddress.encode(message).finish();
  },
  toProtoMsg(message: PolicyWithAddress): PolicyWithAddressProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.PolicyWithAddress",
      value: PolicyWithAddress.encode(message).finish()
    };
  }
};
function createBasePolicyVersionEntry(): PolicyVersionEntry {
  return {
    policyAddress: "",
    version: BigInt(0)
  };
}
/**
 * PolicyVersionEntry pairs a policy address with its current version.
 * @name PolicyVersionEntry
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PolicyVersionEntry
 */
export const PolicyVersionEntry = {
  typeUrl: "/sparkdream.commons.v1.PolicyVersionEntry",
  encode(message: PolicyVersionEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policyAddress !== "") {
      writer.uint32(10).string(message.policyAddress);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(16).uint64(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PolicyVersionEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyVersionEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyAddress = reader.string();
          break;
        case 2:
          message.version = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PolicyVersionEntry>): PolicyVersionEntry {
    const message = createBasePolicyVersionEntry();
    message.policyAddress = object.policyAddress ?? "";
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PolicyVersionEntryAmino): PolicyVersionEntry {
    const message = createBasePolicyVersionEntry();
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    return message;
  },
  toAmino(message: PolicyVersionEntry): PolicyVersionEntryAmino {
    const obj: any = {};
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    obj.version = message.version !== BigInt(0) ? message.version?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PolicyVersionEntryAminoMsg): PolicyVersionEntry {
    return PolicyVersionEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PolicyVersionEntryProtoMsg): PolicyVersionEntry {
    return PolicyVersionEntry.decode(message.value);
  },
  toProto(message: PolicyVersionEntry): Uint8Array {
    return PolicyVersionEntry.encode(message).finish();
  },
  toProtoMsg(message: PolicyVersionEntry): PolicyVersionEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.PolicyVersionEntry",
      value: PolicyVersionEntry.encode(message).finish()
    };
  }
};
function createBaseProposalVotes(): ProposalVotes {
  return {
    proposalId: BigInt(0),
    votes: []
  };
}
/**
 * ProposalVotes groups votes by proposal ID for genesis export.
 * @name ProposalVotes
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.ProposalVotes
 */
export const ProposalVotes = {
  typeUrl: "/sparkdream.commons.v1.ProposalVotes",
  encode(message: ProposalVotes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalVotes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalVotes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProposalVotes>): ProposalVotes {
    const message = createBaseProposalVotes();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ProposalVotesAmino): ProposalVotes {
    const message = createBaseProposalVotes();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ProposalVotes): ProposalVotesAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    return obj;
  },
  fromAminoMsg(object: ProposalVotesAminoMsg): ProposalVotes {
    return ProposalVotes.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalVotesProtoMsg): ProposalVotes {
    return ProposalVotes.decode(message.value);
  },
  toProto(message: ProposalVotes): Uint8Array {
    return ProposalVotes.encode(message).finish();
  },
  toProtoMsg(message: ProposalVotes): ProposalVotesProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.ProposalVotes",
      value: ProposalVotes.encode(message).finish()
    };
  }
};