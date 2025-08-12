//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as sparkdreamBlogV1TxRegistry from "./blog/v1/tx.registry";
import * as sparkdreamSparkdreamV1TxRegistry from "./sparkdream/v1/tx.registry";
import * as sparkdreamBlogV1TxAmino from "./blog/v1/tx.amino";
import * as sparkdreamSparkdreamV1TxAmino from "./sparkdream/v1/tx.amino";
export const sparkdreamAminoConverters = {
  ...sparkdreamBlogV1TxAmino.AminoConverter,
  ...sparkdreamSparkdreamV1TxAmino.AminoConverter
};
export const sparkdreamProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...sparkdreamBlogV1TxRegistry.registry, ...sparkdreamSparkdreamV1TxRegistry.registry];
export const getSigningSparkdreamClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...sparkdreamProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...sparkdreamAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningSparkdreamClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningSparkdreamClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};