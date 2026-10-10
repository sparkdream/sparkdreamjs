//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateClass, MsgUpdateClass, MsgFreezeClassMetadata, MsgSetMintPolicy, MsgSetMinters, MsgSetMaxSupply, MsgCloseMinting, MsgProposeClassOwner, MsgAcceptClassOwner, MsgCancelClassOwner, MsgDeleteClass, MsgMint, MsgPublicMint, MsgTransfer, MsgAcceptIncoming, MsgRejectIncoming, MsgCancelOutgoing, MsgSetReceivePolicy, MsgBurn, MsgRevoke, MsgUpdateToken, MsgFreezeTokenMetadata, MsgList, MsgUpdateListing, MsgDelist, MsgBuy, MsgHideContent, MsgUnhideContent, MsgAppealHide, MsgUpdateOperationalParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.artifact.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.artifact.v1.MsgCreateClass", MsgCreateClass], ["/sparkdream.artifact.v1.MsgUpdateClass", MsgUpdateClass], ["/sparkdream.artifact.v1.MsgFreezeClassMetadata", MsgFreezeClassMetadata], ["/sparkdream.artifact.v1.MsgSetMintPolicy", MsgSetMintPolicy], ["/sparkdream.artifact.v1.MsgSetMinters", MsgSetMinters], ["/sparkdream.artifact.v1.MsgSetMaxSupply", MsgSetMaxSupply], ["/sparkdream.artifact.v1.MsgCloseMinting", MsgCloseMinting], ["/sparkdream.artifact.v1.MsgProposeClassOwner", MsgProposeClassOwner], ["/sparkdream.artifact.v1.MsgAcceptClassOwner", MsgAcceptClassOwner], ["/sparkdream.artifact.v1.MsgCancelClassOwner", MsgCancelClassOwner], ["/sparkdream.artifact.v1.MsgDeleteClass", MsgDeleteClass], ["/sparkdream.artifact.v1.MsgMint", MsgMint], ["/sparkdream.artifact.v1.MsgPublicMint", MsgPublicMint], ["/sparkdream.artifact.v1.MsgTransfer", MsgTransfer], ["/sparkdream.artifact.v1.MsgAcceptIncoming", MsgAcceptIncoming], ["/sparkdream.artifact.v1.MsgRejectIncoming", MsgRejectIncoming], ["/sparkdream.artifact.v1.MsgCancelOutgoing", MsgCancelOutgoing], ["/sparkdream.artifact.v1.MsgSetReceivePolicy", MsgSetReceivePolicy], ["/sparkdream.artifact.v1.MsgBurn", MsgBurn], ["/sparkdream.artifact.v1.MsgRevoke", MsgRevoke], ["/sparkdream.artifact.v1.MsgUpdateToken", MsgUpdateToken], ["/sparkdream.artifact.v1.MsgFreezeTokenMetadata", MsgFreezeTokenMetadata], ["/sparkdream.artifact.v1.MsgList", MsgList], ["/sparkdream.artifact.v1.MsgUpdateListing", MsgUpdateListing], ["/sparkdream.artifact.v1.MsgDelist", MsgDelist], ["/sparkdream.artifact.v1.MsgBuy", MsgBuy], ["/sparkdream.artifact.v1.MsgHideContent", MsgHideContent], ["/sparkdream.artifact.v1.MsgUnhideContent", MsgUnhideContent], ["/sparkdream.artifact.v1.MsgAppealHide", MsgAppealHide], ["/sparkdream.artifact.v1.MsgUpdateOperationalParams", MsgUpdateOperationalParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createClass(value: MsgCreateClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCreateClass",
        value: MsgCreateClass.encode(value).finish()
      };
    },
    updateClass(value: MsgUpdateClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateClass",
        value: MsgUpdateClass.encode(value).finish()
      };
    },
    freezeClassMetadata(value: MsgFreezeClassMetadata) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFreezeClassMetadata",
        value: MsgFreezeClassMetadata.encode(value).finish()
      };
    },
    setMintPolicy(value: MsgSetMintPolicy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMintPolicy",
        value: MsgSetMintPolicy.encode(value).finish()
      };
    },
    setMinters(value: MsgSetMinters) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMinters",
        value: MsgSetMinters.encode(value).finish()
      };
    },
    setMaxSupply(value: MsgSetMaxSupply) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMaxSupply",
        value: MsgSetMaxSupply.encode(value).finish()
      };
    },
    closeMinting(value: MsgCloseMinting) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCloseMinting",
        value: MsgCloseMinting.encode(value).finish()
      };
    },
    proposeClassOwner(value: MsgProposeClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgProposeClassOwner",
        value: MsgProposeClassOwner.encode(value).finish()
      };
    },
    acceptClassOwner(value: MsgAcceptClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptClassOwner",
        value: MsgAcceptClassOwner.encode(value).finish()
      };
    },
    cancelClassOwner(value: MsgCancelClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelClassOwner",
        value: MsgCancelClassOwner.encode(value).finish()
      };
    },
    deleteClass(value: MsgDeleteClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDeleteClass",
        value: MsgDeleteClass.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },
    publicMint(value: MsgPublicMint) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgPublicMint",
        value: MsgPublicMint.encode(value).finish()
      };
    },
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgTransfer",
        value: MsgTransfer.encode(value).finish()
      };
    },
    acceptIncoming(value: MsgAcceptIncoming) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptIncoming",
        value: MsgAcceptIncoming.encode(value).finish()
      };
    },
    rejectIncoming(value: MsgRejectIncoming) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRejectIncoming",
        value: MsgRejectIncoming.encode(value).finish()
      };
    },
    cancelOutgoing(value: MsgCancelOutgoing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelOutgoing",
        value: MsgCancelOutgoing.encode(value).finish()
      };
    },
    setReceivePolicy(value: MsgSetReceivePolicy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetReceivePolicy",
        value: MsgSetReceivePolicy.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    revoke(value: MsgRevoke) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRevoke",
        value: MsgRevoke.encode(value).finish()
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateToken",
        value: MsgUpdateToken.encode(value).finish()
      };
    },
    freezeTokenMetadata(value: MsgFreezeTokenMetadata) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFreezeTokenMetadata",
        value: MsgFreezeTokenMetadata.encode(value).finish()
      };
    },
    list(value: MsgList) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgList",
        value: MsgList.encode(value).finish()
      };
    },
    updateListing(value: MsgUpdateListing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateListing",
        value: MsgUpdateListing.encode(value).finish()
      };
    },
    delist(value: MsgDelist) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDelist",
        value: MsgDelist.encode(value).finish()
      };
    },
    buy(value: MsgBuy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBuy",
        value: MsgBuy.encode(value).finish()
      };
    },
    hideContent(value: MsgHideContent) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgHideContent",
        value: MsgHideContent.encode(value).finish()
      };
    },
    unhideContent(value: MsgUnhideContent) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUnhideContent",
        value: MsgUnhideContent.encode(value).finish()
      };
    },
    appealHide(value: MsgAppealHide) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAppealHide",
        value: MsgAppealHide.encode(value).finish()
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateParams",
        value
      };
    },
    createClass(value: MsgCreateClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCreateClass",
        value
      };
    },
    updateClass(value: MsgUpdateClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateClass",
        value
      };
    },
    freezeClassMetadata(value: MsgFreezeClassMetadata) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFreezeClassMetadata",
        value
      };
    },
    setMintPolicy(value: MsgSetMintPolicy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMintPolicy",
        value
      };
    },
    setMinters(value: MsgSetMinters) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMinters",
        value
      };
    },
    setMaxSupply(value: MsgSetMaxSupply) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMaxSupply",
        value
      };
    },
    closeMinting(value: MsgCloseMinting) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCloseMinting",
        value
      };
    },
    proposeClassOwner(value: MsgProposeClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgProposeClassOwner",
        value
      };
    },
    acceptClassOwner(value: MsgAcceptClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptClassOwner",
        value
      };
    },
    cancelClassOwner(value: MsgCancelClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelClassOwner",
        value
      };
    },
    deleteClass(value: MsgDeleteClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDeleteClass",
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgMint",
        value
      };
    },
    publicMint(value: MsgPublicMint) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgPublicMint",
        value
      };
    },
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgTransfer",
        value
      };
    },
    acceptIncoming(value: MsgAcceptIncoming) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptIncoming",
        value
      };
    },
    rejectIncoming(value: MsgRejectIncoming) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRejectIncoming",
        value
      };
    },
    cancelOutgoing(value: MsgCancelOutgoing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelOutgoing",
        value
      };
    },
    setReceivePolicy(value: MsgSetReceivePolicy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetReceivePolicy",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBurn",
        value
      };
    },
    revoke(value: MsgRevoke) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRevoke",
        value
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateToken",
        value
      };
    },
    freezeTokenMetadata(value: MsgFreezeTokenMetadata) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFreezeTokenMetadata",
        value
      };
    },
    list(value: MsgList) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgList",
        value
      };
    },
    updateListing(value: MsgUpdateListing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateListing",
        value
      };
    },
    delist(value: MsgDelist) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDelist",
        value
      };
    },
    buy(value: MsgBuy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBuy",
        value
      };
    },
    hideContent(value: MsgHideContent) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgHideContent",
        value
      };
    },
    unhideContent(value: MsgUnhideContent) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUnhideContent",
        value
      };
    },
    appealHide(value: MsgAppealHide) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAppealHide",
        value
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateOperationalParams",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createClass(value: MsgCreateClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCreateClass",
        value: MsgCreateClass.fromPartial(value)
      };
    },
    updateClass(value: MsgUpdateClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateClass",
        value: MsgUpdateClass.fromPartial(value)
      };
    },
    freezeClassMetadata(value: MsgFreezeClassMetadata) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFreezeClassMetadata",
        value: MsgFreezeClassMetadata.fromPartial(value)
      };
    },
    setMintPolicy(value: MsgSetMintPolicy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMintPolicy",
        value: MsgSetMintPolicy.fromPartial(value)
      };
    },
    setMinters(value: MsgSetMinters) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMinters",
        value: MsgSetMinters.fromPartial(value)
      };
    },
    setMaxSupply(value: MsgSetMaxSupply) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetMaxSupply",
        value: MsgSetMaxSupply.fromPartial(value)
      };
    },
    closeMinting(value: MsgCloseMinting) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCloseMinting",
        value: MsgCloseMinting.fromPartial(value)
      };
    },
    proposeClassOwner(value: MsgProposeClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgProposeClassOwner",
        value: MsgProposeClassOwner.fromPartial(value)
      };
    },
    acceptClassOwner(value: MsgAcceptClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptClassOwner",
        value: MsgAcceptClassOwner.fromPartial(value)
      };
    },
    cancelClassOwner(value: MsgCancelClassOwner) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelClassOwner",
        value: MsgCancelClassOwner.fromPartial(value)
      };
    },
    deleteClass(value: MsgDeleteClass) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDeleteClass",
        value: MsgDeleteClass.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },
    publicMint(value: MsgPublicMint) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgPublicMint",
        value: MsgPublicMint.fromPartial(value)
      };
    },
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgTransfer",
        value: MsgTransfer.fromPartial(value)
      };
    },
    acceptIncoming(value: MsgAcceptIncoming) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAcceptIncoming",
        value: MsgAcceptIncoming.fromPartial(value)
      };
    },
    rejectIncoming(value: MsgRejectIncoming) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRejectIncoming",
        value: MsgRejectIncoming.fromPartial(value)
      };
    },
    cancelOutgoing(value: MsgCancelOutgoing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgCancelOutgoing",
        value: MsgCancelOutgoing.fromPartial(value)
      };
    },
    setReceivePolicy(value: MsgSetReceivePolicy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgSetReceivePolicy",
        value: MsgSetReceivePolicy.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    revoke(value: MsgRevoke) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgRevoke",
        value: MsgRevoke.fromPartial(value)
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateToken",
        value: MsgUpdateToken.fromPartial(value)
      };
    },
    freezeTokenMetadata(value: MsgFreezeTokenMetadata) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgFreezeTokenMetadata",
        value: MsgFreezeTokenMetadata.fromPartial(value)
      };
    },
    list(value: MsgList) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgList",
        value: MsgList.fromPartial(value)
      };
    },
    updateListing(value: MsgUpdateListing) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateListing",
        value: MsgUpdateListing.fromPartial(value)
      };
    },
    delist(value: MsgDelist) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgDelist",
        value: MsgDelist.fromPartial(value)
      };
    },
    buy(value: MsgBuy) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgBuy",
        value: MsgBuy.fromPartial(value)
      };
    },
    hideContent(value: MsgHideContent) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgHideContent",
        value: MsgHideContent.fromPartial(value)
      };
    },
    unhideContent(value: MsgUnhideContent) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUnhideContent",
        value: MsgUnhideContent.fromPartial(value)
      };
    },
    appealHide(value: MsgAppealHide) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgAppealHide",
        value: MsgAppealHide.fromPartial(value)
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.artifact.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.fromPartial(value)
      };
    }
  }
};