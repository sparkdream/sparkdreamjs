//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgAccountDeposit } from "./msg";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/akash.escrow.v1.MsgAccountDeposit", MsgAccountDeposit]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    accountDeposit(value: MsgAccountDeposit) {
      return {
        typeUrl: "/akash.escrow.v1.MsgAccountDeposit",
        value: MsgAccountDeposit.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    accountDeposit(value: MsgAccountDeposit) {
      return {
        typeUrl: "/akash.escrow.v1.MsgAccountDeposit",
        value
      };
    }
  },
  fromPartial: {
    accountDeposit(value: MsgAccountDeposit) {
      return {
        typeUrl: "/akash.escrow.v1.MsgAccountDeposit",
        value: MsgAccountDeposit.fromPartial(value)
      };
    }
  }
};