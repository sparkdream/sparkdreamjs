//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid by scripts/codegen.ts after telescope.
// See ../../commons/v1/tx.amino.ts for rationale.
//
// MsgExecSession has `repeated google.protobuf.Any msgs = 3` (note the
// shorter field name `msgs`, not `messages`). Same recursive-Any problem.

import {
  MsgUpdateParams, MsgUpdateOperationalParams,
  MsgCreateSession, MsgRevokeSession, MsgExecSession,
} from "./tx";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { toTimestamp } from "../../../helpers";
import { anyToAmino, aminoToAny } from "../../../nested-amino";

export const AminoConverter = {
  "/sparkdream.session.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/session/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sparkdream.session.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/session/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino,
  },
  // `allowed_msg_types` is the repeated string field that gets emitted as `[]`
  // when a session is created with no type allowlist (i.e. allow-all).
  "/sparkdream.session.v1.MsgCreateSession": {
    aminoType: "sparkdream/x/session/MsgCreateSession",
    toAmino(message: any): any {
      const obj: any = {};
      obj.granter = message.granter === "" ? undefined : message.granter;
      obj.grantee = message.grantee === "" ? undefined : message.grantee;
      obj.allowed_msg_types = (message.allowedMsgTypes?.length ?? 0) > 0
        ? message.allowedMsgTypes.map((e: string) => e)
        : undefined;
      obj.spend_limit = message.spendLimit ? Coin.toAmino(message.spendLimit) : undefined;
      obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
      obj.max_exec_count = message.maxExecCount !== BigInt(0) ? message.maxExecCount?.toString() : undefined;
      return obj;
    },
    fromAmino: MsgCreateSession.fromAmino,
  },
  "/sparkdream.session.v1.MsgRevokeSession": {
    aminoType: "sparkdream/x/session/MsgRevokeSession",
    toAmino: MsgRevokeSession.toAmino,
    fromAmino: MsgRevokeSession.fromAmino,
  },
  "/sparkdream.session.v1.MsgExecSession": {
    aminoType: "sparkdream/x/session/MsgExecSession",
    toAmino(message: any): any {
      const obj: any = {};
      obj.grantee = message.grantee === "" ? undefined : message.grantee;
      obj.granter = message.granter === "" ? undefined : message.granter;
      // Omit when empty to match the chain's aminojson default for
      // repeated fields.
      obj.msgs = (message.msgs?.length ?? 0) > 0
        ? message.msgs.map((a: any) => anyToAmino(a))
        : undefined;
      return obj;
    },
    fromAmino(object: any): any {
      return {
        grantee: object.grantee ?? "",
        granter: object.granter ?? "",
        msgs: (object.msgs ?? []).map((e: any) => aminoToAny(e)),
      };
    },
  },
};
