//@ts-nocheck
import { TelescopeGeneratedType } from "../../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgSendCall } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/ibc.applications.gmp.v1.MsgSendCall", MsgSendCall]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    sendCall(value: MsgSendCall) {
      return {
        typeUrl: "/ibc.applications.gmp.v1.MsgSendCall",
        value: MsgSendCall.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    sendCall(value: MsgSendCall) {
      return {
        typeUrl: "/ibc.applications.gmp.v1.MsgSendCall",
        value
      };
    }
  },
  fromPartial: {
    sendCall(value: MsgSendCall) {
      return {
        typeUrl: "/ibc.applications.gmp.v1.MsgSendCall",
        value: MsgSendCall.fromPartial(value)
      };
    }
  }
};