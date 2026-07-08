//@ts-nocheck
import { MsgCreateDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
import { MsgUpdateParams } from "./paramsmsg";
export const AminoConverter = {
  "/akash.deployment.v1beta4.MsgCreateDeployment": {
    aminoType: "/akash.deployment.v1beta4.MsgCreateDeployment",
    toAmino: MsgCreateDeployment.toAmino,
    fromAmino: MsgCreateDeployment.fromAmino
  },
  "/akash.deployment.v1beta4.MsgUpdateDeployment": {
    aminoType: "/akash.deployment.v1beta4.MsgUpdateDeployment",
    toAmino: MsgUpdateDeployment.toAmino,
    fromAmino: MsgUpdateDeployment.fromAmino
  },
  "/akash.deployment.v1beta4.MsgCloseDeployment": {
    aminoType: "/akash.deployment.v1beta4.MsgCloseDeployment",
    toAmino: MsgCloseDeployment.toAmino,
    fromAmino: MsgCloseDeployment.fromAmino
  },
  "/akash.deployment.v1beta4.MsgCloseGroup": {
    aminoType: "/akash.deployment.v1beta4.MsgCloseGroup",
    toAmino: MsgCloseGroup.toAmino,
    fromAmino: MsgCloseGroup.fromAmino
  },
  "/akash.deployment.v1beta4.MsgPauseGroup": {
    aminoType: "/akash.deployment.v1beta4.MsgPauseGroup",
    toAmino: MsgPauseGroup.toAmino,
    fromAmino: MsgPauseGroup.fromAmino
  },
  "/akash.deployment.v1beta4.MsgStartGroup": {
    aminoType: "/akash.deployment.v1beta4.MsgStartGroup",
    toAmino: MsgStartGroup.toAmino,
    fromAmino: MsgStartGroup.fromAmino
  },
  "/akash.deployment.v1beta4.MsgUpdateParams": {
    aminoType: "/akash.deployment.v1beta4.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};