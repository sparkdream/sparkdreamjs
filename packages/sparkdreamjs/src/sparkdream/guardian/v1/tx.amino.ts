//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid on top of the Telescope-generated tx.amino.ts
// by scripts/codegen.ts after each codegen run. Do not let codegen wipe this.
//
// Why: Telescope emits a flat AminoConverter that hands each entry's toAmino
// straight through to the message's auto-generated toAmino. For
// MsgExec (`google.protobuf.Any inner`), the auto-generated toAmino calls
// Any.toAmino, which just attaches the raw Uint8Array bytes — Ledger rejects
// the resulting JSON ("Dictionaries are not sorted") and the chain produces
// different sign bytes ("signature verification failed").
//
// This override delegates the inner Any conversion to a consumer-supplied
// proto registry + AminoTypes via `configureNestedAminoConverter`.
// The rest of the converters are unchanged.
//
// MAINTENANCE: this map REPLACES the generated one wholesale, so it must list
// every message in tx.proto. A message added to the proto but not added here
// ends up with no amino converter at all, and amino (Ledger) signing for it
// fails at runtime. When syncing protos, diff the message list in
// protos/sparkdream/guardian/v1/tx.proto against the keys below.

import { MsgExec } from "./tx";
import { anyToAmino, aminoToAny } from "../../../nested-amino";

export { configureNestedAminoConverter } from "../../../nested-amino";
export const AminoConverter = {
  "/sparkdream.guardian.v1.MsgExec": {
    aminoType: "sparkdream/x/guardian/MsgExec",
    toAmino(message: any): any {
      const obj: any = {};
      obj.authority = message.authority === "" ? undefined : message.authority;
      obj.inner = message.inner ? anyToAmino(message.inner) : undefined;
      return obj;
    },
    fromAmino(object: any): any {
      return {
        authority: object.authority ?? "",
        inner: object.inner ? aminoToAny(object.inner) : undefined,
      };
    },
  }
};
