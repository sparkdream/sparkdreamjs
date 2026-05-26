//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgExec } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.guardian.v1.MsgExec", MsgExec]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    exec(value: MsgExec) {
      return {
        typeUrl: "/sparkdream.guardian.v1.MsgExec",
        value: MsgExec.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    exec(value: MsgExec) {
      return {
        typeUrl: "/sparkdream.guardian.v1.MsgExec",
        value
      };
    }
  },
  fromPartial: {
    exec(value: MsgExec) {
      return {
        typeUrl: "/sparkdream.guardian.v1.MsgExec",
        value: MsgExec.fromPartial(value)
      };
    }
  }
};