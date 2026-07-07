//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgBurnMint, MsgBurnMintResponse, MsgMintACT, MsgMintACTResponse, MsgBurnACT, MsgBurnACTResponse, MsgFundVault, MsgFundVaultResponse } from "./msgs";
/** Msg defines the BME (Burn/Mint Engine) transaction service.
 The BME module manages the burn and mint operations for ACT tokens,
 maintaining collateral ratios and enforcing circuit breaker rules. */
export interface Msg {
  /**
   * UpdateParams updates the module parameters.
   * This operation can only be performed through governance proposals.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * BurnMint allows users to burn one token and mint another at current oracle prices.
   * Typically used to burn unused ACT tokens back to AKT.
   * The operation may be delayed or rejected based on circuit breaker status.
   */
  burnMint(request: MsgBurnMint): Promise<MsgBurnMintResponse>;
  /**
   * MintACT mints ACT tokens by burning the specified source token.
   * The mint amount is calculated based on current oracle prices and
   * the collateral ratio. May be halted if circuit breaker is triggered.
   */
  mintACT(request: MsgMintACT): Promise<MsgMintACTResponse>;
  /**
   * BurnACT burns ACT tokens and mints the specified destination token.
   * The burn operation uses remint credits when available, otherwise
   * requires adequate collateral backing based on oracle prices.
   */
  burnACT(request: MsgBurnACT): Promise<MsgBurnACTResponse>;
  /**
   * FundVault seeds the BME vault with AKT from a designated source (e.g., community pool).
   * This provides the initial volatility buffer required for burn/mint operations.
   * Can only be executed through governance proposals.
   */
  fundVault(request: MsgFundVault): Promise<MsgFundVaultResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams updates the module parameters.
   This operation can only be performed through governance proposals. */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("akash.bme.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* BurnMint allows users to burn one token and mint another at current oracle prices.
   Typically used to burn unused ACT tokens back to AKT.
   The operation may be delayed or rejected based on circuit breaker status. */
  burnMint = async (request: MsgBurnMint): Promise<MsgBurnMintResponse> => {
    const data = MsgBurnMint.encode(request).finish();
    const promise = this.rpc.request("akash.bme.v1.Msg", "BurnMint", data);
    return promise.then(data => MsgBurnMintResponse.decode(new BinaryReader(data)));
  };
  /* MintACT mints ACT tokens by burning the specified source token.
   The mint amount is calculated based on current oracle prices and
   the collateral ratio. May be halted if circuit breaker is triggered. */
  mintACT = async (request: MsgMintACT): Promise<MsgMintACTResponse> => {
    const data = MsgMintACT.encode(request).finish();
    const promise = this.rpc.request("akash.bme.v1.Msg", "MintACT", data);
    return promise.then(data => MsgMintACTResponse.decode(new BinaryReader(data)));
  };
  /* BurnACT burns ACT tokens and mints the specified destination token.
   The burn operation uses remint credits when available, otherwise
   requires adequate collateral backing based on oracle prices. */
  burnACT = async (request: MsgBurnACT): Promise<MsgBurnACTResponse> => {
    const data = MsgBurnACT.encode(request).finish();
    const promise = this.rpc.request("akash.bme.v1.Msg", "BurnACT", data);
    return promise.then(data => MsgBurnACTResponse.decode(new BinaryReader(data)));
  };
  /* FundVault seeds the BME vault with AKT from a designated source (e.g., community pool).
   This provides the initial volatility buffer required for burn/mint operations.
   Can only be executed through governance proposals. */
  fundVault = async (request: MsgFundVault): Promise<MsgFundVaultResponse> => {
    const data = MsgFundVault.encode(request).finish();
    const promise = this.rpc.request("akash.bme.v1.Msg", "FundVault", data);
    return promise.then(data => MsgFundVaultResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};