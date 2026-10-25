//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid on top of the Telescope-generated tx.amino.ts
// by scripts/codegen.ts after each codegen run. Do not let codegen wipe this.
//
// Why: Telescope emits a flat AminoConverter that hands each entry's toAmino
// straight through to the message's auto-generated toAmino. For
// MsgPropose (`repeated google.protobuf.Any messages`), the auto-generated
// toAmino calls Any.toAmino, which just attaches the raw Uint8Array bytes — Ledger rejects
// the resulting JSON ("Dictionaries are not sorted") and the chain produces
// different sign bytes ("signature verification failed").
//
// This override delegates the inner Any conversion to a consumer-supplied
// proto registry + AminoTypes via `configureNestedAminoConverter`.
//
// MsgCreateVault / MsgUpdateVault (and MsgPropose's `messages`) additionally
// omit an empty list to match aminojson's omitempty, rather than signing `[]`
// (see the rep override for the full story).
//
// The rest of the converters are unchanged.
//
// MAINTENANCE: this map REPLACES the generated one wholesale, so it must list
// every message in tx.proto. A message added to the proto but not added here
// ends up with no amino converter at all, and amino (Ledger) signing for it
// fails at runtime. When syncing protos, diff the message list in
// protos/sparkdream/vault/v1/tx.proto against the keys below.

import { MsgUpdateParams, MsgCreateVault, MsgPropose, MsgApprove, MsgRevokeApproval, MsgExecute, MsgCancelProposal, MsgUpdateVault } from "./tx";
import { VaultSigner } from "./vault_signer";
import { anyToAmino, aminoToAny } from "../../../nested-amino";

export { configureNestedAminoConverter } from "../../../nested-amino";
export const AminoConverter = {
  "/sparkdream.vault.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/vault/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.vault.v1.MsgCreateVault": {
    aminoType: "sparkdream/x/vault/MsgCreateVault",
    toAmino(message: any): any {
      const obj: any = {};
      obj.creator = message.creator === "" ? undefined : message.creator;
      obj.signers = (message.signers?.length ?? 0) > 0
        ? message.signers.map((e: any) => e ? VaultSigner.toAmino(e) : undefined)
        : undefined;
      obj.threshold = message.threshold !== BigInt(0) ? message.threshold?.toString() : undefined;
      obj.proposal_ttl = message.proposalTtl !== BigInt(0) ? message.proposalTtl?.toString() : undefined;
      obj.label = message.label === "" ? undefined : message.label;
      return obj;
    },
    fromAmino: MsgCreateVault.fromAmino
  },
  "/sparkdream.vault.v1.MsgPropose": {
    aminoType: "sparkdream/x/vault/MsgPropose",
    toAmino(message: any): any {
      const obj: any = {};
      obj.signer = message.signer === "" ? undefined : message.signer;
      obj.vault_id = message.vaultId !== BigInt(0) ? message.vaultId?.toString() : undefined;
      // Mirror aminojson's omitempty default for repeated fields: omit when
      // empty rather than emitting `[]`.
      obj.messages = (message.messages?.length ?? 0) > 0
        ? message.messages.map((a: any) => anyToAmino(a))
        : undefined;
      obj.memo = message.memo === "" ? undefined : message.memo;
      obj.execute = message.execute === false ? undefined : message.execute;
      return obj;
    },
    fromAmino(object: any): any {
      return {
        signer: object.signer ?? "",
        vaultId: object.vault_id !== undefined && object.vault_id !== null ? BigInt(object.vault_id) : BigInt(0),
        messages: (object.messages ?? []).map((e: any) => aminoToAny(e)),
        memo: object.memo ?? "",
        execute: object.execute ?? false,
      };
    },
  },
  "/sparkdream.vault.v1.MsgApprove": {
    aminoType: "sparkdream/x/vault/MsgApprove",
    toAmino: MsgApprove.toAmino,
    fromAmino: MsgApprove.fromAmino
  },
  "/sparkdream.vault.v1.MsgRevokeApproval": {
    aminoType: "sparkdream/x/vault/MsgRevokeApproval",
    toAmino: MsgRevokeApproval.toAmino,
    fromAmino: MsgRevokeApproval.fromAmino
  },
  "/sparkdream.vault.v1.MsgExecute": {
    aminoType: "sparkdream/x/vault/MsgExecute",
    toAmino: MsgExecute.toAmino,
    fromAmino: MsgExecute.fromAmino
  },
  "/sparkdream.vault.v1.MsgCancelProposal": {
    aminoType: "sparkdream/x/vault/MsgCancelProposal",
    toAmino: MsgCancelProposal.toAmino,
    fromAmino: MsgCancelProposal.fromAmino
  },
  "/sparkdream.vault.v1.MsgUpdateVault": {
    aminoType: "sparkdream/x/vault/MsgUpdateVault",
    toAmino(message: any): any {
      const obj: any = {};
      obj.vault = message.vault === "" ? undefined : message.vault;
      obj.signers = (message.signers?.length ?? 0) > 0
        ? message.signers.map((e: any) => e ? VaultSigner.toAmino(e) : undefined)
        : undefined;
      obj.threshold = message.threshold !== BigInt(0) ? message.threshold?.toString() : undefined;
      obj.proposal_ttl = message.proposalTtl !== BigInt(0) ? message.proposalTtl?.toString() : undefined;
      obj.label = message.label === "" ? undefined : message.label;
      return obj;
    },
    fromAmino: MsgUpdateVault.fromAmino
  }
};
