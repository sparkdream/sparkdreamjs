//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgBurnMint, MsgMintACT, MsgBurnACT, MsgFundVault } from "./msgs";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/akash.bme.v1.MsgUpdateParams", MsgUpdateParams], ["/akash.bme.v1.MsgBurnMint", MsgBurnMint], ["/akash.bme.v1.MsgMintACT", MsgMintACT], ["/akash.bme.v1.MsgBurnACT", MsgBurnACT], ["/akash.bme.v1.MsgFundVault", MsgFundVault]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/akash.bme.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    burnMint(value: MsgBurnMint) {
      return {
        typeUrl: "/akash.bme.v1.MsgBurnMint",
        value: MsgBurnMint.encode(value).finish()
      };
    },
    mintACT(value: MsgMintACT) {
      return {
        typeUrl: "/akash.bme.v1.MsgMintACT",
        value: MsgMintACT.encode(value).finish()
      };
    },
    burnACT(value: MsgBurnACT) {
      return {
        typeUrl: "/akash.bme.v1.MsgBurnACT",
        value: MsgBurnACT.encode(value).finish()
      };
    },
    fundVault(value: MsgFundVault) {
      return {
        typeUrl: "/akash.bme.v1.MsgFundVault",
        value: MsgFundVault.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/akash.bme.v1.MsgUpdateParams",
        value
      };
    },
    burnMint(value: MsgBurnMint) {
      return {
        typeUrl: "/akash.bme.v1.MsgBurnMint",
        value
      };
    },
    mintACT(value: MsgMintACT) {
      return {
        typeUrl: "/akash.bme.v1.MsgMintACT",
        value
      };
    },
    burnACT(value: MsgBurnACT) {
      return {
        typeUrl: "/akash.bme.v1.MsgBurnACT",
        value
      };
    },
    fundVault(value: MsgFundVault) {
      return {
        typeUrl: "/akash.bme.v1.MsgFundVault",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/akash.bme.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    burnMint(value: MsgBurnMint) {
      return {
        typeUrl: "/akash.bme.v1.MsgBurnMint",
        value: MsgBurnMint.fromPartial(value)
      };
    },
    mintACT(value: MsgMintACT) {
      return {
        typeUrl: "/akash.bme.v1.MsgMintACT",
        value: MsgMintACT.fromPartial(value)
      };
    },
    burnACT(value: MsgBurnACT) {
      return {
        typeUrl: "/akash.bme.v1.MsgBurnACT",
        value: MsgBurnACT.fromPartial(value)
      };
    },
    fundVault(value: MsgFundVault) {
      return {
        typeUrl: "/akash.bme.v1.MsgFundVault",
        value: MsgFundVault.fromPartial(value)
      };
    }
  }
};