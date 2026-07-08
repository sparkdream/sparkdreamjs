//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgAddPriceEntry, MsgUpdateParams } from "./msgs";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/akash.oracle.v1.MsgAddPriceEntry", MsgAddPriceEntry], ["/akash.oracle.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addPriceEntry(value: MsgAddPriceEntry) {
      return {
        typeUrl: "/akash.oracle.v1.MsgAddPriceEntry",
        value: MsgAddPriceEntry.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/akash.oracle.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addPriceEntry(value: MsgAddPriceEntry) {
      return {
        typeUrl: "/akash.oracle.v1.MsgAddPriceEntry",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/akash.oracle.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    addPriceEntry(value: MsgAddPriceEntry) {
      return {
        typeUrl: "/akash.oracle.v1.MsgAddPriceEntry",
        value: MsgAddPriceEntry.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/akash.oracle.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};