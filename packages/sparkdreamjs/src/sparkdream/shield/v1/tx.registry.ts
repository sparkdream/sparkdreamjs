//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgShieldedExec, MsgTriggerDkg, MsgRegisterShieldedOp, MsgDeregisterShieldedOp } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.shield.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.shield.v1.MsgShieldedExec", MsgShieldedExec], ["/sparkdream.shield.v1.MsgTriggerDkg", MsgTriggerDkg], ["/sparkdream.shield.v1.MsgRegisterShieldedOp", MsgRegisterShieldedOp], ["/sparkdream.shield.v1.MsgDeregisterShieldedOp", MsgDeregisterShieldedOp]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    shieldedExec(value: MsgShieldedExec) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgShieldedExec",
        value: MsgShieldedExec.encode(value).finish()
      };
    },
    triggerDKG(value: MsgTriggerDkg) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgTriggerDkg",
        value: MsgTriggerDkg.encode(value).finish()
      };
    },
    registerShieldedOp(value: MsgRegisterShieldedOp) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgRegisterShieldedOp",
        value: MsgRegisterShieldedOp.encode(value).finish()
      };
    },
    deregisterShieldedOp(value: MsgDeregisterShieldedOp) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgDeregisterShieldedOp",
        value: MsgDeregisterShieldedOp.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgUpdateParams",
        value
      };
    },
    shieldedExec(value: MsgShieldedExec) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgShieldedExec",
        value
      };
    },
    triggerDKG(value: MsgTriggerDkg) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgTriggerDkg",
        value
      };
    },
    registerShieldedOp(value: MsgRegisterShieldedOp) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgRegisterShieldedOp",
        value
      };
    },
    deregisterShieldedOp(value: MsgDeregisterShieldedOp) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgDeregisterShieldedOp",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    shieldedExec(value: MsgShieldedExec) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgShieldedExec",
        value: MsgShieldedExec.fromPartial(value)
      };
    },
    triggerDKG(value: MsgTriggerDkg) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgTriggerDkg",
        value: MsgTriggerDkg.fromPartial(value)
      };
    },
    registerShieldedOp(value: MsgRegisterShieldedOp) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgRegisterShieldedOp",
        value: MsgRegisterShieldedOp.fromPartial(value)
      };
    },
    deregisterShieldedOp(value: MsgDeregisterShieldedOp) {
      return {
        typeUrl: "/sparkdream.shield.v1.MsgDeregisterShieldedOp",
        value: MsgDeregisterShieldedOp.fromPartial(value)
      };
    }
  }
};