//@ts-nocheck
import { MsgUpdateParams, MsgCreateClass, MsgUpdateClass, MsgFreezeClassMetadata, MsgSetMintPolicy, MsgSetMinters, MsgSetMaxSupply, MsgCloseMinting, MsgProposeClassOwner, MsgAcceptClassOwner, MsgCancelClassOwner, MsgDeleteClass, MsgMint, MsgPublicMint, MsgTransfer, MsgAcceptIncoming, MsgRejectIncoming, MsgCancelOutgoing, MsgSetReceivePolicy, MsgBurn, MsgRevoke, MsgUpdateToken, MsgFreezeTokenMetadata, MsgList, MsgUpdateListing, MsgDelist, MsgBuy, MsgHideContent, MsgUnhideContent, MsgAppealHide, MsgUpdateOperationalParams } from "./tx";
export const AminoConverter = {
  "/sparkdream.artifact.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/artifact/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.artifact.v1.MsgCreateClass": {
    aminoType: "sparkdream/x/artifact/MsgCreateClass",
    toAmino: MsgCreateClass.toAmino,
    fromAmino: MsgCreateClass.fromAmino
  },
  "/sparkdream.artifact.v1.MsgUpdateClass": {
    aminoType: "sparkdream/x/artifact/MsgUpdateClass",
    toAmino: MsgUpdateClass.toAmino,
    fromAmino: MsgUpdateClass.fromAmino
  },
  "/sparkdream.artifact.v1.MsgFreezeClassMetadata": {
    aminoType: "sparkdream/x/artifact/MsgFreezeClassMetadata",
    toAmino: MsgFreezeClassMetadata.toAmino,
    fromAmino: MsgFreezeClassMetadata.fromAmino
  },
  "/sparkdream.artifact.v1.MsgSetMintPolicy": {
    aminoType: "sparkdream/x/artifact/MsgSetMintPolicy",
    toAmino: MsgSetMintPolicy.toAmino,
    fromAmino: MsgSetMintPolicy.fromAmino
  },
  "/sparkdream.artifact.v1.MsgSetMinters": {
    aminoType: "sparkdream/x/artifact/MsgSetMinters",
    toAmino: MsgSetMinters.toAmino,
    fromAmino: MsgSetMinters.fromAmino
  },
  "/sparkdream.artifact.v1.MsgSetMaxSupply": {
    aminoType: "sparkdream/x/artifact/MsgSetMaxSupply",
    toAmino: MsgSetMaxSupply.toAmino,
    fromAmino: MsgSetMaxSupply.fromAmino
  },
  "/sparkdream.artifact.v1.MsgCloseMinting": {
    aminoType: "sparkdream/x/artifact/MsgCloseMinting",
    toAmino: MsgCloseMinting.toAmino,
    fromAmino: MsgCloseMinting.fromAmino
  },
  "/sparkdream.artifact.v1.MsgProposeClassOwner": {
    aminoType: "sparkdream/x/artifact/MsgProposeClassOwner",
    toAmino: MsgProposeClassOwner.toAmino,
    fromAmino: MsgProposeClassOwner.fromAmino
  },
  "/sparkdream.artifact.v1.MsgAcceptClassOwner": {
    aminoType: "sparkdream/x/artifact/MsgAcceptClassOwner",
    toAmino: MsgAcceptClassOwner.toAmino,
    fromAmino: MsgAcceptClassOwner.fromAmino
  },
  "/sparkdream.artifact.v1.MsgCancelClassOwner": {
    aminoType: "sparkdream/x/artifact/MsgCancelClassOwner",
    toAmino: MsgCancelClassOwner.toAmino,
    fromAmino: MsgCancelClassOwner.fromAmino
  },
  "/sparkdream.artifact.v1.MsgDeleteClass": {
    aminoType: "sparkdream/x/artifact/MsgDeleteClass",
    toAmino: MsgDeleteClass.toAmino,
    fromAmino: MsgDeleteClass.fromAmino
  },
  "/sparkdream.artifact.v1.MsgMint": {
    aminoType: "sparkdream/x/artifact/MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/sparkdream.artifact.v1.MsgPublicMint": {
    aminoType: "sparkdream/x/artifact/MsgPublicMint",
    toAmino: MsgPublicMint.toAmino,
    fromAmino: MsgPublicMint.fromAmino
  },
  "/sparkdream.artifact.v1.MsgTransfer": {
    aminoType: "sparkdream/x/artifact/MsgTransfer",
    toAmino: MsgTransfer.toAmino,
    fromAmino: MsgTransfer.fromAmino
  },
  "/sparkdream.artifact.v1.MsgAcceptIncoming": {
    aminoType: "sparkdream/x/artifact/MsgAcceptIncoming",
    toAmino: MsgAcceptIncoming.toAmino,
    fromAmino: MsgAcceptIncoming.fromAmino
  },
  "/sparkdream.artifact.v1.MsgRejectIncoming": {
    aminoType: "sparkdream/x/artifact/MsgRejectIncoming",
    toAmino: MsgRejectIncoming.toAmino,
    fromAmino: MsgRejectIncoming.fromAmino
  },
  "/sparkdream.artifact.v1.MsgCancelOutgoing": {
    aminoType: "sparkdream/x/artifact/MsgCancelOutgoing",
    toAmino: MsgCancelOutgoing.toAmino,
    fromAmino: MsgCancelOutgoing.fromAmino
  },
  "/sparkdream.artifact.v1.MsgSetReceivePolicy": {
    aminoType: "sparkdream/x/artifact/MsgSetReceivePolicy",
    toAmino: MsgSetReceivePolicy.toAmino,
    fromAmino: MsgSetReceivePolicy.fromAmino
  },
  "/sparkdream.artifact.v1.MsgBurn": {
    aminoType: "sparkdream/x/artifact/MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/sparkdream.artifact.v1.MsgRevoke": {
    aminoType: "sparkdream/x/artifact/MsgRevoke",
    toAmino: MsgRevoke.toAmino,
    fromAmino: MsgRevoke.fromAmino
  },
  "/sparkdream.artifact.v1.MsgUpdateToken": {
    aminoType: "sparkdream/x/artifact/MsgUpdateToken",
    toAmino: MsgUpdateToken.toAmino,
    fromAmino: MsgUpdateToken.fromAmino
  },
  "/sparkdream.artifact.v1.MsgFreezeTokenMetadata": {
    aminoType: "sparkdream/x/artifact/MsgFreezeTokenMetadata",
    toAmino: MsgFreezeTokenMetadata.toAmino,
    fromAmino: MsgFreezeTokenMetadata.fromAmino
  },
  "/sparkdream.artifact.v1.MsgList": {
    aminoType: "sparkdream/x/artifact/MsgList",
    toAmino: MsgList.toAmino,
    fromAmino: MsgList.fromAmino
  },
  "/sparkdream.artifact.v1.MsgUpdateListing": {
    aminoType: "sparkdream/x/artifact/MsgUpdateListing",
    toAmino: MsgUpdateListing.toAmino,
    fromAmino: MsgUpdateListing.fromAmino
  },
  "/sparkdream.artifact.v1.MsgDelist": {
    aminoType: "sparkdream/x/artifact/MsgDelist",
    toAmino: MsgDelist.toAmino,
    fromAmino: MsgDelist.fromAmino
  },
  "/sparkdream.artifact.v1.MsgBuy": {
    aminoType: "sparkdream/x/artifact/MsgBuy",
    toAmino: MsgBuy.toAmino,
    fromAmino: MsgBuy.fromAmino
  },
  "/sparkdream.artifact.v1.MsgHideContent": {
    aminoType: "sparkdream/x/artifact/MsgHideContent",
    toAmino: MsgHideContent.toAmino,
    fromAmino: MsgHideContent.fromAmino
  },
  "/sparkdream.artifact.v1.MsgUnhideContent": {
    aminoType: "sparkdream/x/artifact/MsgUnhideContent",
    toAmino: MsgUnhideContent.toAmino,
    fromAmino: MsgUnhideContent.fromAmino
  },
  "/sparkdream.artifact.v1.MsgAppealHide": {
    aminoType: "sparkdream/x/artifact/MsgAppealHide",
    toAmino: MsgAppealHide.toAmino,
    fromAmino: MsgAppealHide.fromAmino
  },
  "/sparkdream.artifact.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/artifact/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  }
};