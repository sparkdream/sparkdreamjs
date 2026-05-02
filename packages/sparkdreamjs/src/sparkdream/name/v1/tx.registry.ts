//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgRegisterName, MsgSetPrimary, MsgFileDispute, MsgContestDispute, MsgResolveDispute, MsgUpdateName, MsgSetDisplayName } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.name.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.name.v1.MsgUpdateOperationalParams", MsgUpdateOperationalParams], ["/sparkdream.name.v1.MsgRegisterName", MsgRegisterName], ["/sparkdream.name.v1.MsgSetPrimary", MsgSetPrimary], ["/sparkdream.name.v1.MsgFileDispute", MsgFileDispute], ["/sparkdream.name.v1.MsgContestDispute", MsgContestDispute], ["/sparkdream.name.v1.MsgResolveDispute", MsgResolveDispute], ["/sparkdream.name.v1.MsgUpdateName", MsgUpdateName], ["/sparkdream.name.v1.MsgSetDisplayName", MsgSetDisplayName]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.encode(value).finish()
      };
    },
    registerName(value: MsgRegisterName) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgRegisterName",
        value: MsgRegisterName.encode(value).finish()
      };
    },
    setPrimary(value: MsgSetPrimary) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgSetPrimary",
        value: MsgSetPrimary.encode(value).finish()
      };
    },
    fileDispute(value: MsgFileDispute) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgFileDispute",
        value: MsgFileDispute.encode(value).finish()
      };
    },
    contestDispute(value: MsgContestDispute) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgContestDispute",
        value: MsgContestDispute.encode(value).finish()
      };
    },
    resolveDispute(value: MsgResolveDispute) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgResolveDispute",
        value: MsgResolveDispute.encode(value).finish()
      };
    },
    updateName(value: MsgUpdateName) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgUpdateName",
        value: MsgUpdateName.encode(value).finish()
      };
    },
    setDisplayName(value: MsgSetDisplayName) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgSetDisplayName",
        value: MsgSetDisplayName.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgUpdateParams",
        value
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgUpdateOperationalParams",
        value
      };
    },
    registerName(value: MsgRegisterName) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgRegisterName",
        value
      };
    },
    setPrimary(value: MsgSetPrimary) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgSetPrimary",
        value
      };
    },
    fileDispute(value: MsgFileDispute) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgFileDispute",
        value
      };
    },
    contestDispute(value: MsgContestDispute) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgContestDispute",
        value
      };
    },
    resolveDispute(value: MsgResolveDispute) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgResolveDispute",
        value
      };
    },
    updateName(value: MsgUpdateName) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgUpdateName",
        value
      };
    },
    setDisplayName(value: MsgSetDisplayName) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgSetDisplayName",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.fromPartial(value)
      };
    },
    registerName(value: MsgRegisterName) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgRegisterName",
        value: MsgRegisterName.fromPartial(value)
      };
    },
    setPrimary(value: MsgSetPrimary) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgSetPrimary",
        value: MsgSetPrimary.fromPartial(value)
      };
    },
    fileDispute(value: MsgFileDispute) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgFileDispute",
        value: MsgFileDispute.fromPartial(value)
      };
    },
    contestDispute(value: MsgContestDispute) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgContestDispute",
        value: MsgContestDispute.fromPartial(value)
      };
    },
    resolveDispute(value: MsgResolveDispute) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgResolveDispute",
        value: MsgResolveDispute.fromPartial(value)
      };
    },
    updateName(value: MsgUpdateName) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgUpdateName",
        value: MsgUpdateName.fromPartial(value)
      };
    },
    setDisplayName(value: MsgSetDisplayName) {
      return {
        typeUrl: "/sparkdream.name.v1.MsgSetDisplayName",
        value: MsgSetDisplayName.fromPartial(value)
      };
    }
  }
};