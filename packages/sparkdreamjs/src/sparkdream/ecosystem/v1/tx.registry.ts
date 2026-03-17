//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgSpend } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.ecosystem.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.ecosystem.v1.MsgSpend", MsgSpend]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.ecosystem.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    spend(value: MsgSpend) {
      return {
        typeUrl: "/sparkdream.ecosystem.v1.MsgSpend",
        value: MsgSpend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.ecosystem.v1.MsgUpdateParams",
        value
      };
    },
    spend(value: MsgSpend) {
      return {
        typeUrl: "/sparkdream.ecosystem.v1.MsgSpend",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.ecosystem.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    spend(value: MsgSpend) {
      return {
        typeUrl: "/sparkdream.ecosystem.v1.MsgSpend",
        value: MsgSpend.fromPartial(value)
      };
    }
  }
};