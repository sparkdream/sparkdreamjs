// @ts-ignore
import downloadProtos from '@cosmology/telescope/main/commands/download'
import { cpSync, existsSync, rmSync } from 'fs'
import { join } from 'path'

// The downloader cleans outDir, which would delete the in-repo sparkdream
// protos (they are maintained here, not downloaded). Stash and restore them
// around the download.
const SPARKDREAM_PROTOS = join(__dirname, '..', 'protos', 'sparkdream')
const STASH = join(__dirname, '..', '.sparkdream-protos-stash')

const config = {
  repos: [
    { owner: "cosmos", repo: "cosmos-sdk", branch: "release/v0.53.x" },
    { owner: "cosmos", repo: "ibc-go" },
    // Akash node messages for the chain launcher (deployment/market/cert/escrow).
    // sdk-50 carries the current-generation protos (deployment v1beta4,
    // market v1beta5, cert/escrow v1) that the network and console run.
    { owner: "akash-network", repo: "akash-api", branch: "sdk-50" },
  ],
  protoDirMapping: {
    "gogo/protobuf/master": ".",
    "googleapis/googleapis/master": ".",
    "protocolbuffers/protobuf/main": "src",
    // akash-api keeps node protos under proto/node/akash/**
    "akash-network/akash-api/sdk-50": "proto/node"
  },
  outDir: "protos",
  ssh: false,
  tempRepoDir: "git-modules",
  targets: [
    "cosmos/**/*.proto",
    "ibc/**/*.proto",
    "akash/**/*.proto",
  ]
};

if (existsSync(SPARKDREAM_PROTOS)) {
  rmSync(STASH, { recursive: true, force: true });
  cpSync(SPARKDREAM_PROTOS, STASH, { recursive: true });
}

downloadProtos(config)
  .then(() => {
    if (existsSync(STASH)) {
      cpSync(STASH, SPARKDREAM_PROTOS, { recursive: true });
      rmSync(STASH, { recursive: true, force: true });
      console.log('♻️  restored in-repo sparkdream protos');
    }
    console.log('✅ Proto download completed');
  })
  // @ts-ignore
  .catch((error) => {
    console.error('❌ Proto download failed:', error);
    process.exit(1);
  });