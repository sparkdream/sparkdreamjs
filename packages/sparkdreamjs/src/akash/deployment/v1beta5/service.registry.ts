//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgCreateDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
import { MsgUpdateParams } from "./paramsmsg";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/akash.deployment.v1beta5.MsgCreateDeployment", MsgCreateDeployment], ["/akash.deployment.v1beta5.MsgUpdateDeployment", MsgUpdateDeployment], ["/akash.deployment.v1beta5.MsgCloseDeployment", MsgCloseDeployment], ["/akash.deployment.v1beta5.MsgCloseGroup", MsgCloseGroup], ["/akash.deployment.v1beta5.MsgPauseGroup", MsgPauseGroup], ["/akash.deployment.v1beta5.MsgStartGroup", MsgStartGroup], ["/akash.deployment.v1beta5.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createDeployment(value: MsgCreateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgCreateDeployment",
        value: MsgCreateDeployment.encode(value).finish()
      };
    },
    updateDeployment(value: MsgUpdateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgUpdateDeployment",
        value: MsgUpdateDeployment.encode(value).finish()
      };
    },
    closeDeployment(value: MsgCloseDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgCloseDeployment",
        value: MsgCloseDeployment.encode(value).finish()
      };
    },
    closeGroup(value: MsgCloseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgCloseGroup",
        value: MsgCloseGroup.encode(value).finish()
      };
    },
    pauseGroup(value: MsgPauseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgPauseGroup",
        value: MsgPauseGroup.encode(value).finish()
      };
    },
    startGroup(value: MsgStartGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgStartGroup",
        value: MsgStartGroup.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createDeployment(value: MsgCreateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgCreateDeployment",
        value
      };
    },
    updateDeployment(value: MsgUpdateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgUpdateDeployment",
        value
      };
    },
    closeDeployment(value: MsgCloseDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgCloseDeployment",
        value
      };
    },
    closeGroup(value: MsgCloseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgCloseGroup",
        value
      };
    },
    pauseGroup(value: MsgPauseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgPauseGroup",
        value
      };
    },
    startGroup(value: MsgStartGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgStartGroup",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    createDeployment(value: MsgCreateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgCreateDeployment",
        value: MsgCreateDeployment.fromPartial(value)
      };
    },
    updateDeployment(value: MsgUpdateDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgUpdateDeployment",
        value: MsgUpdateDeployment.fromPartial(value)
      };
    },
    closeDeployment(value: MsgCloseDeployment) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgCloseDeployment",
        value: MsgCloseDeployment.fromPartial(value)
      };
    },
    closeGroup(value: MsgCloseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgCloseGroup",
        value: MsgCloseGroup.fromPartial(value)
      };
    },
    pauseGroup(value: MsgPauseGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgPauseGroup",
        value: MsgPauseGroup.fromPartial(value)
      };
    },
    startGroup(value: MsgStartGroup) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgStartGroup",
        value: MsgStartGroup.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/akash.deployment.v1beta5.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};