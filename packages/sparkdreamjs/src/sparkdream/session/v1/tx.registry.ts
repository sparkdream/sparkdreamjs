//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgCreateSession, MsgRevokeSession, MsgExecSession, MsgCreateGrant, MsgClaimRecurringPull, MsgPullAllowance, MsgRetryScheduledOneshot, MsgRevokeGrant, MsgDeclineGrant } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.session.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.session.v1.MsgUpdateOperationalParams", MsgUpdateOperationalParams], ["/sparkdream.session.v1.MsgCreateSession", MsgCreateSession], ["/sparkdream.session.v1.MsgRevokeSession", MsgRevokeSession], ["/sparkdream.session.v1.MsgExecSession", MsgExecSession], ["/sparkdream.session.v1.MsgCreateGrant", MsgCreateGrant], ["/sparkdream.session.v1.MsgClaimRecurringPull", MsgClaimRecurringPull], ["/sparkdream.session.v1.MsgPullAllowance", MsgPullAllowance], ["/sparkdream.session.v1.MsgRetryScheduledOneshot", MsgRetryScheduledOneshot], ["/sparkdream.session.v1.MsgRevokeGrant", MsgRevokeGrant], ["/sparkdream.session.v1.MsgDeclineGrant", MsgDeclineGrant]];
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
    },
    createGrant(value: MsgCreateGrant) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgCreateGrant",
        value: MsgCreateGrant.encode(value).finish()
      };
    },
    claimRecurringPull(value: MsgClaimRecurringPull) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgClaimRecurringPull",
        value: MsgClaimRecurringPull.encode(value).finish()
      };
    },
    pullAllowance(value: MsgPullAllowance) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgPullAllowance",
        value: MsgPullAllowance.encode(value).finish()
      };
    },
    retryScheduledOneshot(value: MsgRetryScheduledOneshot) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgRetryScheduledOneshot",
        value: MsgRetryScheduledOneshot.encode(value).finish()
      };
    },
    revokeGrant(value: MsgRevokeGrant) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgRevokeGrant",
        value: MsgRevokeGrant.encode(value).finish()
      };
    },
    declineGrant(value: MsgDeclineGrant) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgDeclineGrant",
        value: MsgDeclineGrant.encode(value).finish()
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
    },
    createGrant(value: MsgCreateGrant) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgCreateGrant",
        value
      };
    },
    claimRecurringPull(value: MsgClaimRecurringPull) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgClaimRecurringPull",
        value
      };
    },
    pullAllowance(value: MsgPullAllowance) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgPullAllowance",
        value
      };
    },
    retryScheduledOneshot(value: MsgRetryScheduledOneshot) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgRetryScheduledOneshot",
        value
      };
    },
    revokeGrant(value: MsgRevokeGrant) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgRevokeGrant",
        value
      };
    },
    declineGrant(value: MsgDeclineGrant) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgDeclineGrant",
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
    },
    createGrant(value: MsgCreateGrant) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgCreateGrant",
        value: MsgCreateGrant.fromPartial(value)
      };
    },
    claimRecurringPull(value: MsgClaimRecurringPull) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgClaimRecurringPull",
        value: MsgClaimRecurringPull.fromPartial(value)
      };
    },
    pullAllowance(value: MsgPullAllowance) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgPullAllowance",
        value: MsgPullAllowance.fromPartial(value)
      };
    },
    retryScheduledOneshot(value: MsgRetryScheduledOneshot) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgRetryScheduledOneshot",
        value: MsgRetryScheduledOneshot.fromPartial(value)
      };
    },
    revokeGrant(value: MsgRevokeGrant) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgRevokeGrant",
        value: MsgRevokeGrant.fromPartial(value)
      };
    },
    declineGrant(value: MsgDeclineGrant) {
      return {
        typeUrl: "/sparkdream.session.v1.MsgDeclineGrant",
        value: MsgDeclineGrant.fromPartial(value)
      };
    }
  }
};