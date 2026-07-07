//@ts-nocheck
import { MsgUpdateParams, MsgBurnMint, MsgMintACT, MsgBurnACT, MsgFundVault } from "./msgs";
export const AminoConverter = {
  "/akash.bme.v1.MsgUpdateParams": {
    aminoType: "akash/bme/v1/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/akash.bme.v1.MsgBurnMint": {
    aminoType: "akash/bme/v1/MsgBurnMint",
    toAmino: MsgBurnMint.toAmino,
    fromAmino: MsgBurnMint.fromAmino
  },
  "/akash.bme.v1.MsgMintACT": {
    aminoType: "akash/bme/v1/MsgMintACT",
    toAmino: MsgMintACT.toAmino,
    fromAmino: MsgMintACT.fromAmino
  },
  "/akash.bme.v1.MsgBurnACT": {
    aminoType: "akash/bme/v1/MsgBurnACT",
    toAmino: MsgBurnACT.toAmino,
    fromAmino: MsgBurnACT.fromAmino
  },
  "/akash.bme.v1.MsgFundVault": {
    aminoType: "akash/bme/v1/MsgFundVault",
    toAmino: MsgFundVault.toAmino,
    fromAmino: MsgFundVault.fromAmino
  }
};