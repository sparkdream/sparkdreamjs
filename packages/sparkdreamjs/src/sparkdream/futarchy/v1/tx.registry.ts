//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgCreateMarket, MsgTrade, MsgRedeem, MsgCancelMarket, MsgWithdrawLiquidity } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.futarchy.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.futarchy.v1.MsgUpdateOperationalParams", MsgUpdateOperationalParams], ["/sparkdream.futarchy.v1.MsgCreateMarket", MsgCreateMarket], ["/sparkdream.futarchy.v1.MsgTrade", MsgTrade], ["/sparkdream.futarchy.v1.MsgRedeem", MsgRedeem], ["/sparkdream.futarchy.v1.MsgCancelMarket", MsgCancelMarket], ["/sparkdream.futarchy.v1.MsgWithdrawLiquidity", MsgWithdrawLiquidity]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.encode(value).finish()
      };
    },
    createMarket(value: MsgCreateMarket) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgCreateMarket",
        value: MsgCreateMarket.encode(value).finish()
      };
    },
    trade(value: MsgTrade) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgTrade",
        value: MsgTrade.encode(value).finish()
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgRedeem",
        value: MsgRedeem.encode(value).finish()
      };
    },
    cancelMarket(value: MsgCancelMarket) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgCancelMarket",
        value: MsgCancelMarket.encode(value).finish()
      };
    },
    withdrawLiquidity(value: MsgWithdrawLiquidity) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgWithdrawLiquidity",
        value: MsgWithdrawLiquidity.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgUpdateParams",
        value
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgUpdateOperationalParams",
        value
      };
    },
    createMarket(value: MsgCreateMarket) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgCreateMarket",
        value
      };
    },
    trade(value: MsgTrade) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgTrade",
        value
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgRedeem",
        value
      };
    },
    cancelMarket(value: MsgCancelMarket) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgCancelMarket",
        value
      };
    },
    withdrawLiquidity(value: MsgWithdrawLiquidity) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgWithdrawLiquidity",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.fromPartial(value)
      };
    },
    createMarket(value: MsgCreateMarket) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgCreateMarket",
        value: MsgCreateMarket.fromPartial(value)
      };
    },
    trade(value: MsgTrade) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgTrade",
        value: MsgTrade.fromPartial(value)
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgRedeem",
        value: MsgRedeem.fromPartial(value)
      };
    },
    cancelMarket(value: MsgCancelMarket) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgCancelMarket",
        value: MsgCancelMarket.fromPartial(value)
      };
    },
    withdrawLiquidity(value: MsgWithdrawLiquidity) {
      return {
        typeUrl: "/sparkdream.futarchy.v1.MsgWithdrawLiquidity",
        value: MsgWithdrawLiquidity.fromPartial(value)
      };
    }
  }
};