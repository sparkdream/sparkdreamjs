//@ts-nocheck
import { MsgCreateBid, MsgCloseBid } from "./bidmsg";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./leasemsg";
import { MsgUpdateParams } from "./paramsmsg";
export const AminoConverter = {
  "/akash.market.v2beta1.MsgCreateBid": {
    aminoType: "/akash.market.v2beta1.MsgCreateBid",
    toAmino: MsgCreateBid.toAmino,
    fromAmino: MsgCreateBid.fromAmino
  },
  "/akash.market.v2beta1.MsgCloseBid": {
    aminoType: "/akash.market.v2beta1.MsgCloseBid",
    toAmino: MsgCloseBid.toAmino,
    fromAmino: MsgCloseBid.fromAmino
  },
  "/akash.market.v2beta1.MsgWithdrawLease": {
    aminoType: "/akash.market.v2beta1.MsgWithdrawLease",
    toAmino: MsgWithdrawLease.toAmino,
    fromAmino: MsgWithdrawLease.fromAmino
  },
  "/akash.market.v2beta1.MsgCreateLease": {
    aminoType: "/akash.market.v2beta1.MsgCreateLease",
    toAmino: MsgCreateLease.toAmino,
    fromAmino: MsgCreateLease.fromAmino
  },
  "/akash.market.v2beta1.MsgCloseLease": {
    aminoType: "/akash.market.v2beta1.MsgCloseLease",
    toAmino: MsgCloseLease.toAmino,
    fromAmino: MsgCloseLease.fromAmino
  },
  "/akash.market.v2beta1.MsgUpdateParams": {
    aminoType: "/akash.market.v2beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};