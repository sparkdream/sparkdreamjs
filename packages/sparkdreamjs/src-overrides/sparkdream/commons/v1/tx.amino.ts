//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid on top of the Telescope-generated tx.amino.ts
// by scripts/codegen.ts after each codegen run. Do not let codegen wipe this.
//
// Why: Telescope emits a flat AminoConverter that hands each entry's toAmino
// straight through to the message's auto-generated toAmino. For
// MsgSubmitProposal and MsgSubmitAnonymousProposal (both have
// `repeated google.protobuf.Any messages`), the auto-generated toAmino calls
// Any.toAmino which just attaches the raw Uint8Array bytes — Ledger rejects
// the resulting JSON ("Dictionaries are not sorted") and the chain produces
// different sign bytes ("signature verification failed").
//
// This override delegates the inner Any conversion to a consumer-supplied
// proto registry + AminoTypes via `configureNestedAminoConverter`. The rest of
// the converters are unchanged.

import {
  MsgUpdateParams, MsgSpendFromCommons, MsgEmergencyCancelGovProposal,
  MsgCreatePolicyPermissions, MsgUpdatePolicyPermissions, MsgDeletePolicyPermissions,
  MsgRegisterGroup, MsgRenewGroup, MsgUpdateGroupMembers, MsgUpdateGroupConfig,
  MsgForceUpgrade, MsgDeleteGroup, MsgVetoGroupProposals,
  MsgSubmitProposal, MsgVoteProposal, MsgExecuteProposal,
  MsgSubmitAnonymousProposal, MsgAnonymousVoteProposal,
  MsgCreateCategory, MsgDeleteCategory,
} from "./tx";
import { anyToAmino, aminoToAny } from "../../../nested-amino";

export { configureNestedAminoConverter } from "../../../nested-amino";

// Both proposal-submission messages share the same shape, so they share a
// converter factory.
function buildProposalConverter(aminoType: string) {
  return {
    aminoType,
    toAmino(message: any): any {
      const obj: any = {};
      obj.proposer = message.proposer === "" ? undefined : message.proposer;
      obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
      // Mirror cosmossdk.io/x/tx/signing/aminojson's omitempty default for
      // repeated fields: omit when empty rather than emitting `[]`. Otherwise
      // the JS side signs `"messages":[]` and the chain reconstructs without
      // the key, causing signature verification to fail.
      obj.messages = (message.messages?.length ?? 0) > 0
        ? message.messages.map((a: any) => anyToAmino(a))
        : undefined;
      obj.metadata = message.metadata === "" ? undefined : message.metadata;
      return obj;
    },
    fromAmino(object: any): any {
      return {
        proposer: object.proposer ?? "",
        policyAddress: object.policy_address ?? "",
        messages: (object.messages ?? []).map((e: any) => aminoToAny(e)),
        metadata: object.metadata ?? "",
      };
    },
  };
}

export const AminoConverter = {
  "/sparkdream.commons.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/commons/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sparkdream.commons.v1.MsgSpendFromCommons": {
    aminoType: "sparkdream/x/commons/MsgSpendFromCommons",
    toAmino: MsgSpendFromCommons.toAmino,
    fromAmino: MsgSpendFromCommons.fromAmino,
  },
  "/sparkdream.commons.v1.MsgEmergencyCancelGovProposal": {
    aminoType: "sparkdream/x/commons/MsgEmergencyCancelGovProposal",
    toAmino: MsgEmergencyCancelGovProposal.toAmino,
    fromAmino: MsgEmergencyCancelGovProposal.fromAmino,
  },
  "/sparkdream.commons.v1.MsgCreatePolicyPermissions": {
    aminoType: "sparkdream/x/commons/MsgCreatePolicyPermissions",
    toAmino: MsgCreatePolicyPermissions.toAmino,
    fromAmino: MsgCreatePolicyPermissions.fromAmino,
  },
  "/sparkdream.commons.v1.MsgUpdatePolicyPermissions": {
    aminoType: "sparkdream/x/commons/MsgUpdatePolicyPermissions",
    toAmino: MsgUpdatePolicyPermissions.toAmino,
    fromAmino: MsgUpdatePolicyPermissions.fromAmino,
  },
  "/sparkdream.commons.v1.MsgDeletePolicyPermissions": {
    aminoType: "sparkdream/x/commons/MsgDeletePolicyPermissions",
    toAmino: MsgDeletePolicyPermissions.toAmino,
    fromAmino: MsgDeletePolicyPermissions.fromAmino,
  },
  "/sparkdream.commons.v1.MsgRegisterGroup": {
    aminoType: "sparkdream/x/commons/MsgRegisterGroup",
    toAmino: MsgRegisterGroup.toAmino,
    fromAmino: MsgRegisterGroup.fromAmino,
  },
  "/sparkdream.commons.v1.MsgRenewGroup": {
    aminoType: "sparkdream/x/commons/MsgRenewGroup",
    toAmino: MsgRenewGroup.toAmino,
    fromAmino: MsgRenewGroup.fromAmino,
  },
  // Telescope's auto-generated toAmino emits `[]` for empty repeated fields
  // (the `if (message.membersToAdd)` check is truthy for `[]` in JS), but
  // aminojson on the chain side omits them. An invite has empty
  // `members_to_remove`, a remove has empty `members_to_add`/`weights_to_add`,
  // and either combination produces sign-bytes that don't match what the
  // chain reconstructs — surfacing as "signature verification failed" /
  // "unauthorized". Mirror the omitempty pattern used by the proposal
  // converter above.
  "/sparkdream.commons.v1.MsgUpdateGroupMembers": {
    aminoType: "sparkdream/x/commons/MsgUpdateGroupMembers",
    toAmino(message: any): any {
      const obj: any = {};
      obj.authority = message.authority === "" ? undefined : message.authority;
      obj.group_policy_address = message.groupPolicyAddress === ""
        ? undefined
        : message.groupPolicyAddress;
      obj.members_to_add = (message.membersToAdd?.length ?? 0) > 0
        ? message.membersToAdd.map((e: string) => e)
        : undefined;
      obj.weights_to_add = (message.weightsToAdd?.length ?? 0) > 0
        ? message.weightsToAdd.map((e: string) => e)
        : undefined;
      obj.members_to_remove = (message.membersToRemove?.length ?? 0) > 0
        ? message.membersToRemove.map((e: string) => e)
        : undefined;
      return obj;
    },
    fromAmino: MsgUpdateGroupMembers.fromAmino,
  },
  "/sparkdream.commons.v1.MsgUpdateGroupConfig": {
    aminoType: "sparkdream/x/commons/MsgUpdateGroupConfig",
    toAmino: MsgUpdateGroupConfig.toAmino,
    fromAmino: MsgUpdateGroupConfig.fromAmino,
  },
  "/sparkdream.commons.v1.MsgForceUpgrade": {
    aminoType: "sparkdream/x/commons/MsgForceUpgrade",
    toAmino: MsgForceUpgrade.toAmino,
    fromAmino: MsgForceUpgrade.fromAmino,
  },
  "/sparkdream.commons.v1.MsgDeleteGroup": {
    aminoType: "sparkdream/x/commons/MsgDeleteGroup",
    toAmino: MsgDeleteGroup.toAmino,
    fromAmino: MsgDeleteGroup.fromAmino,
  },
  "/sparkdream.commons.v1.MsgVetoGroupProposals": {
    aminoType: "sparkdream/x/commons/MsgVetoGroupProposals",
    toAmino: MsgVetoGroupProposals.toAmino,
    fromAmino: MsgVetoGroupProposals.fromAmino,
  },
  // Recursive Any handling — see top-of-file comment.
  "/sparkdream.commons.v1.MsgSubmitProposal": buildProposalConverter(
    "sparkdream/x/commons/MsgSubmitProposal"
  ),
  "/sparkdream.commons.v1.MsgVoteProposal": {
    aminoType: "sparkdream/x/commons/MsgVoteProposal",
    toAmino: MsgVoteProposal.toAmino,
    fromAmino: MsgVoteProposal.fromAmino,
  },
  "/sparkdream.commons.v1.MsgExecuteProposal": {
    aminoType: "sparkdream/x/commons/MsgExecuteProposal",
    toAmino: MsgExecuteProposal.toAmino,
    fromAmino: MsgExecuteProposal.fromAmino,
  },
  // Recursive Any handling — see top-of-file comment.
  "/sparkdream.commons.v1.MsgSubmitAnonymousProposal": buildProposalConverter(
    "sparkdream/x/commons/MsgSubmitAnonymousProposal"
  ),
  "/sparkdream.commons.v1.MsgAnonymousVoteProposal": {
    aminoType: "sparkdream/x/commons/MsgAnonymousVoteProposal",
    toAmino: MsgAnonymousVoteProposal.toAmino,
    fromAmino: MsgAnonymousVoteProposal.fromAmino,
  },
  "/sparkdream.commons.v1.MsgCreateCategory": {
    aminoType: "sparkdream/x/commons/MsgCreateCategory",
    toAmino: MsgCreateCategory.toAmino,
    fromAmino: MsgCreateCategory.fromAmino,
  },
  "/sparkdream.commons.v1.MsgDeleteCategory": {
    aminoType: "sparkdream/x/commons/MsgDeleteCategory",
    toAmino: MsgDeleteCategory.toAmino,
    fromAmino: MsgDeleteCategory.fromAmino,
  },
};
