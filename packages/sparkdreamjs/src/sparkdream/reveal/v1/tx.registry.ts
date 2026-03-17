//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgPropose, MsgApprove, MsgReject, MsgStake, MsgWithdraw, MsgReveal, MsgVerify, MsgCancel, MsgResolveDispute } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.reveal.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.reveal.v1.MsgPropose", MsgPropose], ["/sparkdream.reveal.v1.MsgApprove", MsgApprove], ["/sparkdream.reveal.v1.MsgReject", MsgReject], ["/sparkdream.reveal.v1.MsgStake", MsgStake], ["/sparkdream.reveal.v1.MsgWithdraw", MsgWithdraw], ["/sparkdream.reveal.v1.MsgReveal", MsgReveal], ["/sparkdream.reveal.v1.MsgVerify", MsgVerify], ["/sparkdream.reveal.v1.MsgCancel", MsgCancel], ["/sparkdream.reveal.v1.MsgResolveDispute", MsgResolveDispute]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    propose(value: MsgPropose) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgPropose",
        value: MsgPropose.encode(value).finish()
      };
    },
    approve(value: MsgApprove) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgApprove",
        value: MsgApprove.encode(value).finish()
      };
    },
    reject(value: MsgReject) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgReject",
        value: MsgReject.encode(value).finish()
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgStake",
        value: MsgStake.encode(value).finish()
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgWithdraw",
        value: MsgWithdraw.encode(value).finish()
      };
    },
    reveal(value: MsgReveal) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgReveal",
        value: MsgReveal.encode(value).finish()
      };
    },
    verify(value: MsgVerify) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgVerify",
        value: MsgVerify.encode(value).finish()
      };
    },
    cancel(value: MsgCancel) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgCancel",
        value: MsgCancel.encode(value).finish()
      };
    },
    resolveDispute(value: MsgResolveDispute) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgResolveDispute",
        value: MsgResolveDispute.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgUpdateParams",
        value
      };
    },
    propose(value: MsgPropose) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgPropose",
        value
      };
    },
    approve(value: MsgApprove) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgApprove",
        value
      };
    },
    reject(value: MsgReject) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgReject",
        value
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgStake",
        value
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgWithdraw",
        value
      };
    },
    reveal(value: MsgReveal) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgReveal",
        value
      };
    },
    verify(value: MsgVerify) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgVerify",
        value
      };
    },
    cancel(value: MsgCancel) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgCancel",
        value
      };
    },
    resolveDispute(value: MsgResolveDispute) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgResolveDispute",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    propose(value: MsgPropose) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgPropose",
        value: MsgPropose.fromPartial(value)
      };
    },
    approve(value: MsgApprove) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgApprove",
        value: MsgApprove.fromPartial(value)
      };
    },
    reject(value: MsgReject) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgReject",
        value: MsgReject.fromPartial(value)
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgStake",
        value: MsgStake.fromPartial(value)
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgWithdraw",
        value: MsgWithdraw.fromPartial(value)
      };
    },
    reveal(value: MsgReveal) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgReveal",
        value: MsgReveal.fromPartial(value)
      };
    },
    verify(value: MsgVerify) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgVerify",
        value: MsgVerify.fromPartial(value)
      };
    },
    cancel(value: MsgCancel) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgCancel",
        value: MsgCancel.fromPartial(value)
      };
    },
    resolveDispute(value: MsgResolveDispute) {
      return {
        typeUrl: "/sparkdream.reveal.v1.MsgResolveDispute",
        value: MsgResolveDispute.fromPartial(value)
      };
    }
  }
};