//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgCreateSession, MsgRevokeSession, MsgExecSession } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.session.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.session.v1.MsgUpdateOperationalParams", MsgUpdateOperationalParams], ["/sparkdream.session.v1.MsgCreateSession", MsgCreateSession], ["/sparkdream.session.v1.MsgRevokeSession", MsgRevokeSession], ["/sparkdream.session.v1.MsgExecSession", MsgExecSession]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.encode(value).finish()
      };
    },
    createSession(value: MsgCreateSession) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgCreateSession",
        value: MsgCreateSession.encode(value).finish()
      };
    },
    revokeSession(value: MsgRevokeSession) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgRevokeSession",
        value: MsgRevokeSession.encode(value).finish()
      };
    },
    execSession(value: MsgExecSession) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgExecSession",
        value: MsgExecSession.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgUpdateParams",
        value
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParams",
        value
      };
    },
    createSession(value: MsgCreateSession) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgCreateSession",
        value
      };
    },
    revokeSession(value: MsgRevokeSession) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgRevokeSession",
        value
      };
    },
    execSession(value: MsgExecSession) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgExecSession",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.fromPartial(value)
      };
    },
    createSession(value: MsgCreateSession) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgCreateSession",
        value: MsgCreateSession.fromPartial(value)
      };
    },
    revokeSession(value: MsgRevokeSession) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgRevokeSession",
        value: MsgRevokeSession.fromPartial(value)
      };
    },
    execSession(value: MsgExecSession) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgExecSession",
        value: MsgExecSession.fromPartial(value)
      };
    }
  }
};