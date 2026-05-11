import { TelescopeInput } from '@cosmology/telescope';
import telescope from '@cosmology/telescope';
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { rimrafSync as rimraf } from 'rimraf';

import { AMINO_MAP } from './aminos';

const protoDirs: string[] = [join(__dirname, '/../protos')];
const outPath: string = join(__dirname, '../src');
const overridesPath: string = join(__dirname, '../src-overrides');
rimraf(outPath);

// Recursively overlay every file under `src` onto `dst`, overwriting matching
// files. Used after telescope finishes to drop hand-written overrides on top
// of generated code (e.g. amino converters that need recursive Any handling
// for MsgSubmitProposal / MsgSubmitAnonymousProposal / MsgExecSession — see
// src-overrides/nested-amino.ts).
function overlayDir(src: string, dst: string): string[] {
  if (!existsSync(src)) return [];
  const applied: string[] = [];
  if (!existsSync(dst)) mkdirSync(dst, { recursive: true });
  for (const entry of readdirSync(src)) {
    const s = join(src, entry);
    const d = join(dst, entry);
    if (statSync(s).isDirectory()) {
      applied.push(...overlayDir(s, d));
    } else {
      copyFileSync(s, d);
      applied.push(relative(overridesPath, s));
    }
  }
  return applied;
}

export const options: TelescopeInput = {
  protoDirs,
  outPath,
  options: {
    classesUseArrowFunctions: true,
    env: 'v-next',
    useInterchainJs: true,
    useSDKTypes: false,
    interfaces: {
      enabled: true,
      useUnionTypes: true
    },
    prototypes: {
      enabled: true,
      enableRegistryLoader: true,
      enableMessageComposer: true,
      parser: {
        keepCase: false
      },
      addTypeUrlToDecoders: false,
      addTypeUrlToObjects: true,
      addAminoTypeToObjects: true,
      typingsFormat: {
        duration: 'duration',
        timestamp: 'date',
        useExact: false,
        useDeepPartial: true,
        num64: 'bigint',
        customTypes: {
          useCosmosSDKDec: true,
          useEnhancedDecimal: false
        },
        useTelescopeGeneratedType: true,
        autoFixUndefinedEnumDefault: true
      },
      excluded: {
        packages: [
          'ibc.applications.fee.v1', // issue with parsing protos (LCD routes with nested objects in params)
          'cosmos.app.v1alpha1',
          'cosmos.app.v1beta1',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.base.tendermint.v1beta1',
          'cosmos.crisis.v1beta1',
          'cosmos.evidence.v1beta1',
          'cosmos.genutil.v1beta1',
          'cosmos.autocli.v1',
          'cosmos.msg.v1',
          'cosmos.nft.v1beta1',
          'cosmos.capability.v1beta1',
          'cosmos.orm.v1alpha1',
          'cosmos.orm.v1',
          'cosmos.slashing.v1beta1',
          'google.api',
          'ibc.core.port.v1',
          'ibc.core.types.v1'
        ]
      },
    },

    bundle: {
      enabled: true
    },

    tsDisable: {
      files: [],
      patterns: [],
      disableAll: true
    },

    eslintDisable: {
      files: [],
      patterns: [],
      disableAll: false
    },

    stargateClients: {
      enabled: true,
      includeCosmosDefaultTypes: true
    },

    aminoEncoding: {
      enabled: true,
      customTypes: {
        useCosmosSDKDec: false
      },
      exceptions: {
        ...AMINO_MAP
      },
    },
    rpcClients: {
      type: 'tendermint',
      enabled: true
    },
  }
};


telescope(options)
  .then(() => {
    const overlaid = overlayDir(overridesPath, outPath);
    if (overlaid.length > 0) {
      console.log(`📦 overlaid ${overlaid.length} hand-written file(s) from src-overrides:`);
      for (const f of overlaid) console.log(`   • ${f}`);
    }
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
