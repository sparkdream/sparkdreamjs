//@ts-nocheck
import { MsgUpdateParams, MsgUpdateOperationalParams, MsgCreateMarket, MsgTrade, MsgRedeem, MsgCancelMarket, MsgWithdrawLiquidity } from "./tx";
export const AminoConverter = {
  "/sparkdream.futarchy.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/futarchy/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.futarchy.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/futarchy/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  },
  "/sparkdream.futarchy.v1.MsgCreateMarket": {
    aminoType: "sparkdream/x/futarchy/MsgCreateMarket",
    toAmino: MsgCreateMarket.toAmino,
    fromAmino: MsgCreateMarket.fromAmino
  },
  "/sparkdream.futarchy.v1.MsgTrade": {
    aminoType: "sparkdream/x/futarchy/MsgTrade",
    toAmino: MsgTrade.toAmino,
    fromAmino: MsgTrade.fromAmino
  },
  "/sparkdream.futarchy.v1.MsgRedeem": {
    aminoType: "sparkdream/x/futarchy/MsgRedeem",
    toAmino: MsgRedeem.toAmino,
    fromAmino: MsgRedeem.fromAmino
  },
  "/sparkdream.futarchy.v1.MsgCancelMarket": {
    aminoType: "sparkdream/x/futarchy/MsgCancelMarket",
    toAmino: MsgCancelMarket.toAmino,
    fromAmino: MsgCancelMarket.fromAmino
  },
  "/sparkdream.futarchy.v1.MsgWithdrawLiquidity": {
    aminoType: "sparkdream/x/futarchy/MsgWithdrawLiquidity",
    toAmino: MsgWithdrawLiquidity.toAmino,
    fromAmino: MsgWithdrawLiquidity.fromAmino
  }
};