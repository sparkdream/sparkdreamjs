//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./msg";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/akash.provider.v1beta4.MsgCreateProvider", MsgCreateProvider], ["/akash.provider.v1beta4.MsgUpdateProvider", MsgUpdateProvider], ["/akash.provider.v1beta4.MsgDeleteProvider", MsgDeleteProvider]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createProvider(value: MsgCreateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta4.MsgCreateProvider",
        value: MsgCreateProvider.encode(value).finish()
      };
    },
    updateProvider(value: MsgUpdateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta4.MsgUpdateProvider",
        value: MsgUpdateProvider.encode(value).finish()
      };
    },
    deleteProvider(value: MsgDeleteProvider) {
      return {
        typeUrl: "/akash.provider.v1beta4.MsgDeleteProvider",
        value: MsgDeleteProvider.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createProvider(value: MsgCreateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta4.MsgCreateProvider",
        value
      };
    },
    updateProvider(value: MsgUpdateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta4.MsgUpdateProvider",
        value
      };
    },
    deleteProvider(value: MsgDeleteProvider) {
      return {
        typeUrl: "/akash.provider.v1beta4.MsgDeleteProvider",
        value
      };
    }
  },
  fromPartial: {
    createProvider(value: MsgCreateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta4.MsgCreateProvider",
        value: MsgCreateProvider.fromPartial(value)
      };
    },
    updateProvider(value: MsgUpdateProvider) {
      return {
        typeUrl: "/akash.provider.v1beta4.MsgUpdateProvider",
        value: MsgUpdateProvider.fromPartial(value)
      };
    },
    deleteProvider(value: MsgDeleteProvider) {
      return {
        typeUrl: "/akash.provider.v1beta4.MsgDeleteProvider",
        value: MsgDeleteProvider.fromPartial(value)
      };
    }
  }
};