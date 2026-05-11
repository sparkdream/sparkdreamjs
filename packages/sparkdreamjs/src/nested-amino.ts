//@ts-nocheck
/**
 * Shared registry + helpers for amino-converting messages that embed a
 * `repeated google.protobuf.Any` field (`MsgSubmitProposal`,
 * `MsgSubmitAnonymousProposal`, `MsgExecSession`).
 *
 * The Telescope-generated `Any.toAmino` just emits `{type, value: Uint8Array}`,
 * which JSON.stringify turns into `{"0":N,"1":N,…}` — numeric keys that aren't
 * lexicographically sorted, breaking Ledger's strict amino-JSON validator and
 * leaving the chain unable to reconstruct identical sign bytes.
 *
 * Consumers must call `configureNestedAminoConverter({registry, aminoTypes})`
 * once after they've built both their proto Registry and their stargate
 * AminoTypes. The patched converters below then look up each inner Any's
 * proto codec (to decode bytes back to a typed message) and its registered
 * amino converter (to render the proper amino JSON) — symmetric to what
 * `cosmossdk.io/x/tx/signing/aminojson` does on the chain side.
 */

interface ProtoCodec {
  /** Proto-decodes raw bytes back to the typed message. */
  decode: (bytes: Uint8Array) => any;
  /** Proto-encodes a typed message (or partial) back to raw bytes. */
  encode: (msg: any) => { finish: () => Uint8Array };
  fromPartial: (msg: any) => any;
}

interface RegistryLike {
  lookupType: (typeUrl: string) => ProtoCodec | undefined;
}

interface AminoTypesLike {
  toAmino: (msg: { typeUrl: string; value: any }) => { type: string; value: any };
  fromAmino: (msg: { type: string; value: any }) => { typeUrl: string; value: any };
}

export interface NestedAminoConfig {
  /**
   * Proto registry capable of resolving any typeUrl that may appear inside an
   * Any-typed field. Typically `new Registry(defaultRegistryTypes)` with each
   * module's `load(registry)` called against it.
   */
  registry: RegistryLike;
  /**
   * AminoTypes containing converters for every typeUrl that may appear inside
   * an Any-typed field. Typically `new AminoTypes({...createDefaultAminoConverters(), ...moduleAminos})`.
   */
  aminoTypes: AminoTypesLike;
}

let cfg: NestedAminoConfig | null = null;

export function configureNestedAminoConverter(next: NestedAminoConfig): void {
  cfg = next;
}

function requireCfg(): NestedAminoConfig {
  if (!cfg) {
    throw new Error(
      "@sparkdreamnft/sparkdreamjs: configureNestedAminoConverter({registry, aminoTypes}) " +
        "must be called before amino-signing a tx with MsgSubmitProposal / " +
        "MsgSubmitAnonymousProposal / MsgExecSession (their `messages` / `msgs` " +
        "field needs recursive Any conversion that Telescope can't generate)."
    );
  }
  return cfg;
}

/** Convert one proto-encoded Any to its amino representation. */
export function anyToAmino(any: { typeUrl: string; value: Uint8Array }): { type: string; value: any } {
  const { registry, aminoTypes } = requireCfg();
  const codec = registry.lookupType(any.typeUrl);
  if (!codec) {
    throw new Error(
      `No proto codec registered for inner type ${any.typeUrl}. ` +
        `Ensure the corresponding module's load() has been called on your Registry.`
    );
  }
  const decoded = codec.decode(any.value);
  return aminoTypes.toAmino({ typeUrl: any.typeUrl, value: decoded });
}

/** Convert one amino-typed entry back to a proto-encoded Any. */
export function aminoToAny(entry: { type: string; value: any }): { typeUrl: string; value: Uint8Array } {
  const { registry, aminoTypes } = requireCfg();
  const decoded = aminoTypes.fromAmino(entry);
  const codec = registry.lookupType(decoded.typeUrl);
  if (!codec) {
    throw new Error(`No proto codec registered for inner type ${decoded.typeUrl}.`);
  }
  return { typeUrl: decoded.typeUrl, value: codec.encode(codec.fromPartial(decoded.value)).finish() };
}
