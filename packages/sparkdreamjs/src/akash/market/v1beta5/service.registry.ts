//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgCreateBid, MsgCloseBid } from "./bidmsg";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./leasemsg";
import { MsgUpdateParams } from "./paramsmsg";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/akash.market.v1beta5.MsgCreateBid", MsgCreateBid], ["/akash.market.v1beta5.MsgCloseBid", MsgCloseBid], ["/akash.market.v1beta5.MsgWithdrawLease", MsgWithdrawLease], ["/akash.market.v1beta5.MsgCreateLease", MsgCreateLease], ["/akash.market.v1beta5.MsgCloseLease", MsgCloseLease], ["/akash.market.v1beta5.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createBid(value: MsgCreateBid) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgCreateBid",
        value: MsgCreateBid.encode(value).finish()
      };
    },
    closeBid(value: MsgCloseBid) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgCloseBid",
        value: MsgCloseBid.encode(value).finish()
      };
    },
    withdrawLease(value: MsgWithdrawLease) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgWithdrawLease",
        value: MsgWithdrawLease.encode(value).finish()
      };
    },
    createLease(value: MsgCreateLease) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgCreateLease",
        value: MsgCreateLease.encode(value).finish()
      };
    },
    closeLease(value: MsgCloseLease) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgCloseLease",
        value: MsgCloseLease.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createBid(value: MsgCreateBid) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgCreateBid",
        value
      };
    },
    closeBid(value: MsgCloseBid) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgCloseBid",
        value
      };
    },
    withdrawLease(value: MsgWithdrawLease) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgWithdrawLease",
        value
      };
    },
    createLease(value: MsgCreateLease) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgCreateLease",
        value
      };
    },
    closeLease(value: MsgCloseLease) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgCloseLease",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    createBid(value: MsgCreateBid) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgCreateBid",
        value: MsgCreateBid.fromPartial(value)
      };
    },
    closeBid(value: MsgCloseBid) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgCloseBid",
        value: MsgCloseBid.fromPartial(value)
      };
    },
    withdrawLease(value: MsgWithdrawLease) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgWithdrawLease",
        value: MsgWithdrawLease.fromPartial(value)
      };
    },
    createLease(value: MsgCreateLease) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgCreateLease",
        value: MsgCreateLease.fromPartial(value)
      };
    },
    closeLease(value: MsgCloseLease) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgCloseLease",
        value: MsgCloseLease.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/akash.market.v1beta5.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};