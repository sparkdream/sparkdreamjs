//@ts-nocheck
import { MsgCreateDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
import { MsgUpdateParams } from "./paramsmsg";
export const AminoConverter = {
  "/akash.deployment.v1beta5.MsgCreateDeployment": {
    aminoType: "/akash.deployment.v1beta5.MsgCreateDeployment",
    toAmino: MsgCreateDeployment.toAmino,
    fromAmino: MsgCreateDeployment.fromAmino
  },
  "/akash.deployment.v1beta5.MsgUpdateDeployment": {
    aminoType: "/akash.deployment.v1beta5.MsgUpdateDeployment",
    toAmino: MsgUpdateDeployment.toAmino,
    fromAmino: MsgUpdateDeployment.fromAmino
  },
  "/akash.deployment.v1beta5.MsgCloseDeployment": {
    aminoType: "/akash.deployment.v1beta5.MsgCloseDeployment",
    toAmino: MsgCloseDeployment.toAmino,
    fromAmino: MsgCloseDeployment.fromAmino
  },
  "/akash.deployment.v1beta5.MsgCloseGroup": {
    aminoType: "/akash.deployment.v1beta5.MsgCloseGroup",
    toAmino: MsgCloseGroup.toAmino,
    fromAmino: MsgCloseGroup.fromAmino
  },
  "/akash.deployment.v1beta5.MsgPauseGroup": {
    aminoType: "/akash.deployment.v1beta5.MsgPauseGroup",
    toAmino: MsgPauseGroup.toAmino,
    fromAmino: MsgPauseGroup.fromAmino
  },
  "/akash.deployment.v1beta5.MsgStartGroup": {
    aminoType: "/akash.deployment.v1beta5.MsgStartGroup",
    toAmino: MsgStartGroup.toAmino,
    fromAmino: MsgStartGroup.fromAmino
  },
  "/akash.deployment.v1beta5.MsgUpdateParams": {
    aminoType: "/akash.deployment.v1beta5.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};