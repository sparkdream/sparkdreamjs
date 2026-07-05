//@ts-nocheck
import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  akash: {
    audit: {
      v1: new (await import("./audit/v1/service.rpc.msg")).MsgClientImpl(rpc),
      v1beta3: new (await import("./audit/v1beta3/audit.rpc.msg")).MsgClientImpl(rpc)
    },
    cert: {
      v1: new (await import("./cert/v1/service.rpc.msg")).MsgClientImpl(rpc),
      v1beta3: new (await import("./cert/v1beta3/cert.rpc.msg")).MsgClientImpl(rpc)
    },
    deployment: {
      v1beta3: new (await import("./deployment/v1beta3/service.rpc.msg")).MsgClientImpl(rpc),
      v1beta4: new (await import("./deployment/v1beta4/service.rpc.msg")).MsgClientImpl(rpc)
    },
    market: {
      v1beta4: new (await import("./market/v1beta4/service.rpc.msg")).MsgClientImpl(rpc),
      v1beta5: new (await import("./market/v1beta5/service.rpc.msg")).MsgClientImpl(rpc)
    },
    provider: {
      v1beta3: new (await import("./provider/v1beta3/provider.rpc.msg")).MsgClientImpl(rpc),
      v1beta4: new (await import("./provider/v1beta4/service.rpc.msg")).MsgClientImpl(rpc)
    },
    take: {
      v1: new (await import("./take/v1/service.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  cosmos: {
    auth: {
      v1beta1: new (await import("../cosmos/auth/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    benchmark: {
      v1: new (await import("../cosmos/benchmark/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    circuit: {
      v1: new (await import("../cosmos/circuit/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    consensus: {
      v1: new (await import("../cosmos/consensus/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    counter: {
      v1: new (await import("../cosmos/counter/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    mint: {
      v1beta1: new (await import("../cosmos/mint/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    protocolpool: {
      v1: new (await import("../cosmos/protocolpool/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});