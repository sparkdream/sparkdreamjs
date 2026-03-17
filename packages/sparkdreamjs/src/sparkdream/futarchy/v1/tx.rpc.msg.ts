//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateOperationalParams, MsgUpdateOperationalParamsResponse, MsgCreateMarket, MsgCreateMarketResponse, MsgTrade, MsgTradeResponse, MsgRedeem, MsgRedeemResponse, MsgCancelMarket, MsgCancelMarketResponse, MsgWithdrawLiquidity, MsgWithdrawLiquidityResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * UpdateOperationalParams defines an operation for updating the module's
   * operational parameters. Authorized for Commons Council Operations Committee.
   */
  updateOperationalParams(request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse>;
  /** CreateMarket defines the CreateMarket RPC. */
  createMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse>;
  /** Trade defines the Trade RPC. */
  trade(request: MsgTrade): Promise<MsgTradeResponse>;
  /** Redeem defines the Redeem RPC. */
  redeem(request: MsgRedeem): Promise<MsgRedeemResponse>;
  /** CancelMarket defines the CancelMarket RPC (emergency governance operation). */
  cancelMarket(request: MsgCancelMarket): Promise<MsgCancelMarketResponse>;
  /** WithdrawLiquidity defines the WithdrawLiquidity RPC. */
  withdrawLiquidity(request: MsgWithdrawLiquidity): Promise<MsgWithdrawLiquidityResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a (governance) operation for updating the module
   parameters. The authority defaults to the x/gov module account. */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.futarchy.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* UpdateOperationalParams defines an operation for updating the module's
   operational parameters. Authorized for Commons Council Operations Committee. */
  updateOperationalParams = async (request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse> => {
    const data = MsgUpdateOperationalParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.futarchy.v1.Msg", "UpdateOperationalParams", data);
    return promise.then(data => MsgUpdateOperationalParamsResponse.decode(new BinaryReader(data)));
  };
  /* CreateMarket defines the CreateMarket RPC. */
  createMarket = async (request: MsgCreateMarket): Promise<MsgCreateMarketResponse> => {
    const data = MsgCreateMarket.encode(request).finish();
    const promise = this.rpc.request("sparkdream.futarchy.v1.Msg", "CreateMarket", data);
    return promise.then(data => MsgCreateMarketResponse.decode(new BinaryReader(data)));
  };
  /* Trade defines the Trade RPC. */
  trade = async (request: MsgTrade): Promise<MsgTradeResponse> => {
    const data = MsgTrade.encode(request).finish();
    const promise = this.rpc.request("sparkdream.futarchy.v1.Msg", "Trade", data);
    return promise.then(data => MsgTradeResponse.decode(new BinaryReader(data)));
  };
  /* Redeem defines the Redeem RPC. */
  redeem = async (request: MsgRedeem): Promise<MsgRedeemResponse> => {
    const data = MsgRedeem.encode(request).finish();
    const promise = this.rpc.request("sparkdream.futarchy.v1.Msg", "Redeem", data);
    return promise.then(data => MsgRedeemResponse.decode(new BinaryReader(data)));
  };
  /* CancelMarket defines the CancelMarket RPC (emergency governance operation). */
  cancelMarket = async (request: MsgCancelMarket): Promise<MsgCancelMarketResponse> => {
    const data = MsgCancelMarket.encode(request).finish();
    const promise = this.rpc.request("sparkdream.futarchy.v1.Msg", "CancelMarket", data);
    return promise.then(data => MsgCancelMarketResponse.decode(new BinaryReader(data)));
  };
  /* WithdrawLiquidity defines the WithdrawLiquidity RPC. */
  withdrawLiquidity = async (request: MsgWithdrawLiquidity): Promise<MsgWithdrawLiquidityResponse> => {
    const data = MsgWithdrawLiquidity.encode(request).finish();
    const promise = this.rpc.request("sparkdream.futarchy.v1.Msg", "WithdrawLiquidity", data);
    return promise.then(data => MsgWithdrawLiquidityResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};