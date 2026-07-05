//@ts-nocheck
import { MsgCreateBid, MsgCloseBid } from "./bidmsg";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./leasemsg";
import { MsgUpdateParams } from "./paramsmsg";
export const AminoConverter = {
  "/akash.market.v1beta5.MsgCreateBid": {
    aminoType: "/akash.market.v1beta5.MsgCreateBid",
    toAmino: MsgCreateBid.toAmino,
    fromAmino: MsgCreateBid.fromAmino
  },
  "/akash.market.v1beta5.MsgCloseBid": {
    aminoType: "/akash.market.v1beta5.MsgCloseBid",
    toAmino: MsgCloseBid.toAmino,
    fromAmino: MsgCloseBid.fromAmino
  },
  "/akash.market.v1beta5.MsgWithdrawLease": {
    aminoType: "/akash.market.v1beta5.MsgWithdrawLease",
    toAmino: MsgWithdrawLease.toAmino,
    fromAmino: MsgWithdrawLease.fromAmino
  },
  "/akash.market.v1beta5.MsgCreateLease": {
    aminoType: "/akash.market.v1beta5.MsgCreateLease",
    toAmino: MsgCreateLease.toAmino,
    fromAmino: MsgCreateLease.fromAmino
  },
  "/akash.market.v1beta5.MsgCloseLease": {
    aminoType: "/akash.market.v1beta5.MsgCloseLease",
    toAmino: MsgCloseLease.toAmino,
    fromAmino: MsgCloseLease.fromAmino
  },
  "/akash.market.v1beta5.MsgUpdateParams": {
    aminoType: "/akash.market.v1beta5.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};