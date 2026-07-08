//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    akash: {
      audit: {
        v1: new (await import("./audit/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bme: {
        v1: new (await import("./bme/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      cert: {
        v1: new (await import("./cert/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      deployment: {
        v1beta4: new (await import("./deployment/v1beta4/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta5: new (await import("./deployment/v1beta5/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      downtimedetector: {
        v1beta1: new (await import("./downtimedetector/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      epochs: {
        v1beta1: new (await import("./epochs/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      escrow: {
        v1: new (await import("./escrow/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta3: new (await import("./escrow/v1beta3/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      market: {
        v1beta5: new (await import("./market/v1beta5/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v2beta1: new (await import("./market/v2beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      oracle: {
        v1: new (await import("./oracle/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v2: new (await import("./oracle/v2/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      provider: {
        v1beta4: new (await import("./provider/v1beta4/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      take: {
        v1: new (await import("./take/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      wasm: {
        v1: new (await import("./wasm/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    cosmos: {
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      base: {
        node: {
          v1beta1: new (await import("../cosmos/base/node/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      circuit: {
        v1: new (await import("../cosmos/circuit/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      consensus: {
        v1: new (await import("../cosmos/consensus/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      epochs: {
        v1beta1: new (await import("../cosmos/epochs/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      protocolpool: {
        v1: new (await import("../cosmos/protocolpool/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    }
  };
};