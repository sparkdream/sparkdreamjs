//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid by scripts/codegen.ts after telescope.
// See ../../commons/v1/tx.amino.ts for the broader rationale.
//
// MsgSpend has `repeated cosmos.base.v1beta1.Coin amount` which the
// auto-generated toAmino emits as `[]` when empty, mismatching the chain.

import { MsgUpdateParams, MsgSpend } from "./tx";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const AminoConverter = {
  "/sparkdream.ecosystem.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/ecosystem/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sparkdream.ecosystem.v1.MsgSpend": {
    aminoType: "sparkdream/x/ecosystem/MsgSpend",
    toAmino(message: any): any {
      const obj: any = {};
      obj.authority = message.authority === "" ? undefined : message.authority;
      obj.recipient = message.recipient === "" ? undefined : message.recipient;
      obj.amount = (message.amount?.length ?? 0) > 0
        ? message.amount.map((e: any) => e ? Coin.toAmino(e) : undefined)
        : undefined;
      return obj;
    },
    fromAmino: MsgSpend.fromAmino,
  },
};
