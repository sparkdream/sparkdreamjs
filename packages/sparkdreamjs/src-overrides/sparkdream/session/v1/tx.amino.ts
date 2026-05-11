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
  "/sparkdream.session.v1.MsgCreateSession": {
    aminoType: "sparkdream/x/session/MsgCreateSession",
    toAmino: MsgCreateSession.toAmino,
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
