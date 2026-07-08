//@ts-nocheck
import { MsgAccountDeposit } from "./msg";
export const AminoConverter = {
  "/akash.escrow.v1.MsgAccountDeposit": {
    aminoType: "/akash.escrow.v1.MsgAccountDeposit",
    toAmino: MsgAccountDeposit.toAmino,
    fromAmino: MsgAccountDeposit.fromAmino
  }
};