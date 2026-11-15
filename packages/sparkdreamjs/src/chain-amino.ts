/**
 * Amino-JSON converters (the sign mode Keplr+Ledger use) for every sparkdream
 * Msg, matching the chain's cosmossdk.io/x/tx@v0.14.0 signing/aminojson byte
 * for byte.
 *
 * Instead of one hand-written converter per message (which drifted from the
 * protos on every sync: missing messages, stale field sets, `[]` for empty
 * lists, empty bytes as "", human-readable Dec strings, lost oneof wrappers),
 * every module's AminoConverter map is built here from one schema:
 *
 *   - toAmino encodes the message with its Telescope codec, decodes the
 *     protobuf bytes and renders them with aminojson's rules
 *     (json_marshal.go, encoder.go, any.go, time.go), as the chain does.
 *   - fromAmino is the exact inverse: amino JSON to protobuf bytes, decoded
 *     with the codec.
 *
 * The schema (amino-schema.ts) is exported by the chain repo
 * (`go run ./cmd/aminogolden schema`): field names, kinds and the options
 * aminojson acts on (dont_omitempty, cosmos_proto.scalar, amino.encoding,
 * oneof names, gogoproto.nullable). __tests__/amino-golden.test.ts checks
 * every Msg against the chain's own encoder.
 *
 * An Any whose inner type the schema does not describe (a cosmos-sdk message
 * inside a proposal) is converted through the registry and AminoTypes given
 * to configureNestedAminoConverter, as before.
 */
import { getNestedAminoConfig } from "./nested-amino";
import { aminoSchema } from "./amino-schema";

export interface SchemaField {
  /** amino field name */
  n: string;
  /** field number */
  no: number;
  /** protoreflect kind name ("string", "uint64", "message", ...) or "map" */
  k: string;
  r?: boolean;
  /** proto3 optional: presence is tracked */
  pr?: boolean;
  /** amino.dont_omitempty */
  d?: boolean;
  /** cosmos_proto.scalar: "int" (cosmos.Int), "dec" (cosmos.Dec on a LegacyDec) */
  sc?: "int" | "dec";
  /** amino.encoding */
  e?: string;
  /** message type */
  t?: string;
  /** protobuf JSON name of a message field (the codec's key) */
  j?: string;
  /** gogoproto.nullable = false on a message field */
  nn?: boolean;
  /** [oneof JSON name, amino.oneof_name] */
  o?: [string, string];
  /** gogoproto.stdtime on a Timestamp field (a Go time.Time) */
  st?: boolean;
  /** singular non-nullable customtype scalar (Int, LegacyDec): never empty on the chain, zero is "0" */
  z?: boolean;
}

export interface SchemaMessage {
  /** amino.name */
  a?: string;
  /** amino.message_encoding */
  me?: string;
  f: SchemaField[];
}

export interface AminoSchema {
  msgs: string[];
  messages: Record<string, SchemaMessage>;
}

type Json = null | boolean | number | string | Json[] | { [k: string]: Json };

interface Codec {
  encode: (m: any) => { finish: () => Uint8Array };
  decode: (b: Uint8Array) => any;
  fromPartial: (v: any) => any;
}

const schema = aminoSchema as AminoSchema;
const BUILTIN = new Set(["google.protobuf.Timestamp", "google.protobuf.Duration", "google.protobuf.Any"]);
const byAminoName = new Map<string, string>();
for (const [name, md] of Object.entries(schema.messages)) if (md.a) byAminoName.set(md.a, name);

// ------------------------------------------------------------ wire decoding

interface WireValue {
  wire: number;
  num?: bigint;
  bytes?: Uint8Array;
}

function readVarint(buf: Uint8Array, pos: { i: number }): bigint {
  let result = BigInt(0);
  let shift = BigInt(0);
  for (;;) {
    if (pos.i >= buf.length) throw new Error("truncated varint");
    const b = buf[pos.i++];
    result |= BigInt(b & 0x7f) << shift;
    if ((b & 0x80) === 0) return result;
    shift += BigInt(7);
    if (shift > BigInt(63)) throw new Error("varint overflow");
  }
}

function readFixed(buf: Uint8Array, pos: { i: number }, size: 4 | 8): bigint {
  if (pos.i + size > buf.length) throw new Error("truncated fixed");
  let v = BigInt(0);
  for (let j = size - 1; j >= 0; j--) v = (v << BigInt(8)) | BigInt(buf[pos.i + j]);
  pos.i += size;
  return v;
}

function parseFields(buf: Uint8Array): Map<number, WireValue[]> {
  const out = new Map<number, WireValue[]>();
  const pos = { i: 0 };
  while (pos.i < buf.length) {
    const tag = Number(readVarint(buf, pos));
    const no = tag >>> 3;
    const wire = tag & 7;
    let v: WireValue;
    switch (wire) {
      case 0:
        v = { wire, num: readVarint(buf, pos) };
        break;
      case 1:
        v = { wire, num: readFixed(buf, pos, 8) };
        break;
      case 5:
        v = { wire, num: readFixed(buf, pos, 4) };
        break;
      case 2: {
        const len = Number(readVarint(buf, pos));
        if (pos.i + len > buf.length) throw new Error("truncated bytes");
        v = { wire, bytes: buf.subarray(pos.i, pos.i + len) };
        pos.i += len;
        break;
      }
      default:
        throw new Error(`unsupported wire type ${wire}`);
    }
    const list = out.get(no);
    if (list) list.push(v);
    else out.set(no, [v]);
  }
  return out;
}

const VARINT_KINDS = new Set(["int32", "int64", "uint32", "uint64", "sint32", "sint64", "bool", "enum"]);
const FIXED32_KINDS = new Set(["fixed32", "sfixed32", "float"]);
const FIXED64_KINDS = new Set(["fixed64", "sfixed64", "double"]);
const NUMERIC_KINDS = new Set([...VARINT_KINDS, ...FIXED32_KINDS, ...FIXED64_KINDS]);

/** Scalar elements of a field, unpacking packed encodings. */
function scalarElements(f: SchemaField, values: WireValue[]): bigint[] {
  const out: bigint[] = [];
  for (const v of values) {
    if (v.wire === 2 && NUMERIC_KINDS.has(f.k)) {
      const pos = { i: 0 };
      const b = v.bytes!;
      while (pos.i < b.length) {
        if (VARINT_KINDS.has(f.k)) out.push(readVarint(b, pos));
        else out.push(readFixed(b, pos, FIXED32_KINDS.has(f.k) ? 4 : 8));
      }
    } else {
      out.push(v.num!);
    }
  }
  return out;
}

function concatBytes(parts: Uint8Array[]): Uint8Array {
  if (parts.length === 1) return parts[0];
  const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
  let o = 0;
  for (const p of parts) {
    out.set(p, o);
    o += p.length;
  }
  return out;
}

// --------------------------------------------------------- wire encoding

class Writer {
  private parts: Uint8Array[] = [];

  varint(v: bigint): this {
    let n = BigInt.asUintN(64, v);
    const bytes: number[] = [];
    do {
      let b = Number(n & BigInt(0x7f));
      n >>= BigInt(7);
      if (n > BigInt(0)) b |= 0x80;
      bytes.push(b);
    } while (n > BigInt(0));
    this.parts.push(Uint8Array.from(bytes));
    return this;
  }

  fixed(v: bigint, size: 4 | 8): this {
    const out = new Uint8Array(size);
    let n = BigInt.asUintN(size * 8, v);
    for (let i = 0; i < size; i++) {
      out[i] = Number(n & BigInt(0xff));
      n >>= BigInt(8);
    }
    this.parts.push(out);
    return this;
  }

  tag(no: number, wire: number): this {
    return this.varint(BigInt((no << 3) | wire));
  }

  bytes(no: number, b: Uint8Array): this {
    this.tag(no, 2).varint(BigInt(b.length));
    this.parts.push(b);
    return this;
  }

  finish(): Uint8Array {
    return concatBytes(this.parts.length ? this.parts : [new Uint8Array()]);
  }
}

// --------------------------------------------------------- value helpers

const utf8Decoder = new TextDecoder("utf-8", { fatal: true });
const utf8Encoder = new TextEncoder();

function base64(bytes: Uint8Array): string {
  let s = "";
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s);
}

function fromBase64(s: string): Uint8Array {
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function zigzagDecode(u: bigint, bits: 32 | 64): bigint {
  const v = BigInt.asUintN(bits, u);
  return BigInt.asIntN(bits, (v >> BigInt(1)) ^ -(v & BigInt(1)));
}

function zigzagEncode(v: bigint, bits: 32 | 64): bigint {
  const n = BigInt.asIntN(bits, v);
  return BigInt.asUintN(bits, (n << BigInt(1)) ^ (n >> BigInt(bits - 1)));
}

function scalarJson(kind: string, n: bigint | undefined, bytes: Uint8Array | undefined): Json {
  const v = n ?? BigInt(0);
  switch (kind) {
    case "string":
      return utf8Decoder.decode(bytes ?? new Uint8Array());
    case "bytes":
      // encoding/json marshals a nil []byte as null, a non-nil one as base64.
      return bytes && bytes.length > 0 ? base64(bytes) : null;
    case "bool":
      return v !== BigInt(0);
    case "int32":
    case "enum":
    case "sfixed32":
      return Number(BigInt.asIntN(32, v));
    case "uint32":
    case "fixed32":
      return Number(BigInt.asUintN(32, v));
    case "sint32":
      return Number(zigzagDecode(v, 32));
    // 64-bit integers are quoted.
    case "int64":
    case "sfixed64":
      return BigInt.asIntN(64, v).toString();
    case "uint64":
    case "fixed64":
      return BigInt.asUintN(64, v).toString();
    case "sint64":
      return zigzagDecode(v, 64).toString();
  }
  // aminojson has no case for floats (marshal returns "unknown type").
  throw new Error(`amino JSON cannot encode a ${kind} field`);
}

function isZeroScalar(kind: string, n: bigint | undefined, bytes: Uint8Array | undefined): boolean {
  if (kind === "string" || kind === "bytes") return !bytes || bytes.length === 0;
  return (n ?? BigInt(0)) === BigInt(0);
}

/** math.LegacyDec.String() of an 18-decimal integer representation. */
function legacyDecString(atomics: string): string {
  if (!/^-?\d+$/.test(atomics)) throw new Error(`invalid LegacyDec ${JSON.stringify(atomics)}`);
  const neg = atomics.startsWith("-");
  let digits = BigInt(neg ? atomics.slice(1) : atomics).toString();
  if (digits === "0") return "0.000000000000000000";
  digits = digits.padStart(19, "0");
  return `${neg ? "-" : ""}${digits.slice(0, -18)}.${digits.slice(-18)}`;
}

/** Inverse of legacyDecString. */
function legacyDecAtomics(dec: string): string {
  const m = /^(-?)(\d+)(?:\.(\d{1,18}))?$/.exec(dec);
  if (!m) throw new Error(`invalid Dec ${JSON.stringify(dec)}`);
  const atomics = BigInt(m[2] + (m[3] ?? "").padEnd(18, "0"));
  return (m[1] && atomics !== BigInt(0) ? "-" : "") + atomics.toString();
}

function sortedJson(v: unknown): Json {
  if (Array.isArray(v)) return v.map(sortedJson);
  if (v && typeof v === "object") {
    const o = v as Record<string, unknown>;
    return Object.fromEntries(Object.keys(o).sort().map((k) => [k, sortedJson(o[k])]));
  }
  return v as Json;
}

function rfc3339(seconds: bigint, nanos: number): string {
  if (nanos < 0) throw new Error("nanos must be non-negative on timestamp");
  const date = new Date(Number(seconds) * 1000);
  if (Number.isNaN(date.getTime())) throw new Error("timestamp out of range");
  const base = date.toISOString().slice(0, 19);
  if (nanos === 0) return `${base}Z`;
  return `${base}.${String(nanos).padStart(9, "0").replace(/0+$/, "")}Z`;
}

function parseRfc3339(s: string): { seconds: bigint; nanos: number } {
  const m = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})(?:\.(\d{1,9}))?Z$/.exec(s);
  if (!m) throw new Error(`invalid timestamp ${JSON.stringify(s)}`);
  const ms = Date.parse(`${m[1]}Z`);
  return { seconds: BigInt(Math.floor(ms / 1000)), nanos: Number((m[2] ?? "").padEnd(9, "0")) };
}

// ---------------------------------------------------------------- render

function render(typeName: string, bytes: Uint8Array, isAny: boolean): Json {
  const md = schema.messages[typeName];
  const name = isAny ? md?.a ?? `/${typeName}` : md?.a;
  const value = renderMessage(typeName, bytes);
  return name !== undefined ? { type: name, value } : value;
}

const ZERO_STRING: WireValue[] = [{ wire: 2, bytes: new TextEncoder().encode("0") }];
const EMPTY_MESSAGE: WireValue[] = [{ wire: 2, bytes: new Uint8Array() }];
/** Go's zero time.Time, 0001-01-01T00:00:00Z, as Timestamp bytes (seconds = -62135596800). */
const GO_ZERO_TIME: WireValue[] = [
  { wire: 2, bytes: new Uint8Array([0x08, 0x80, 0x92, 0xb8, 0xc3, 0x98, 0xfe, 0xff, 0xff, 0xff, 0x01]) },
];

/**
 * The wire values of a field as the chain signs them. Decoding a tx, the SDK
 * unpacks each message into its gogoproto Go type and replaces the message's
 * bytes with that value's re-encoding; aminojson renders from those bytes,
 * not from the ones the client sent. A gogoproto.nullable = false field is a
 * plain value in the Go type and is always written:
 *   - an embedded message left out comes back present and empty (a Coin
 *     renders as {"amount":"0"}), a stdtime Timestamp as Go's zero time;
 *   - an empty Int or LegacyDec customtype comes back as "0".
 * A client that leaves such a field unset (a session key's `spent` and
 * `last_used_at`, say) must still sign the JSON that includes it.
 */
function chainValues(f: SchemaField, values: WireValue[]): WireValue[] {
  if (f.r || f.k === "map") return values;
  if (f.k === "message") {
    if (f.nn && values.length === 0) return f.st ? GO_ZERO_TIME : EMPTY_MESSAGE;
    return values;
  }
  if (f.z) {
    const last = values[values.length - 1];
    if (!last || !last.bytes || last.bytes.length === 0) return ZERO_STRING;
  }
  return values;
}

/** protoreflect Message.Has for a dynamic proto3 message. */
function fieldHas(f: SchemaField, values: WireValue[]): boolean {
  if (values.length === 0) return false;
  if (f.k === "map") return true;
  if (f.r) return NUMERIC_KINDS.has(f.k) ? scalarElements(f, values).length > 0 : true;
  if (f.k === "message" || f.o || f.pr) return true;
  const last = values[values.length - 1];
  return !isZeroScalar(f.k, last.num, last.bytes);
}

function renderMessage(typeName: string, bytes: Uint8Array): Json {
  switch (typeName) {
    case "google.protobuf.Timestamp": {
      const w = parseFields(bytes);
      return rfc3339(
        BigInt.asIntN(64, w.get(1)?.at(-1)?.num ?? BigInt(0)),
        Number(BigInt.asIntN(32, w.get(2)?.at(-1)?.num ?? BigInt(0))),
      );
    }
    case "google.protobuf.Duration": {
      const w = parseFields(bytes);
      const seconds = BigInt.asIntN(64, w.get(1)?.at(-1)?.num ?? BigInt(0));
      const nanos = BigInt.asIntN(32, w.get(2)?.at(-1)?.num ?? BigInt(0));
      return (nanos + seconds * BigInt(1_000_000_000)).toString();
    }
    case "google.protobuf.Any":
      return renderAny(bytes);
  }
  const md = schema.messages[typeName];
  if (!md) throw new Error(`amino schema has no message ${typeName}`);
  if (md.me) throw new Error(`amino message_encoding ${md.me} (${typeName}) is not supported`);

  const wire = parseFields(bytes);
  const sortName = (f: SchemaField) => (f.o ? f.o[0] : f.n);
  const fields = [...md.f].sort((a, b) => (sortName(a) < sortName(b) ? -1 : sortName(a) > sortName(b) ? 1 : 0));
  const oneofSet = new Set(md.f.filter((f) => f.o && wire.has(f.no)).map((f) => f.o![0]));
  const emptyOneofWritten = new Set<string>();
  const out: Record<string, Json> = {};

  for (const f of fields) {
    const values = chainValues(f, wire.get(f.no) ?? []);
    let name = f.n;
    let writeNil = false;
    if (!fieldHas(f, values)) {
      if (f.o && !oneofSet.has(f.o[0]) && !emptyOneofWritten.has(f.o[0])) {
        name = f.o[0];
        writeNil = true;
        emptyOneofWritten.add(f.o[0]);
      } else if (!f.d) {
        continue;
      } else if (f.k === "message" && !f.r) {
        throw new Error(`not supported: dont_omit_empty=true on invalid (nil?) message field: ${f.n}`);
      }
    }

    let value: Json;
    const encoder = fieldEncoder(f);
    if (encoder) value = encoder(values);
    else if (writeNil) value = null;
    else value = renderValue(f, values);

    if (f.o && !writeNil) out[f.o[0]] = { type: f.o[1], value: { [name]: value } };
    else out[name] = value;
  }
  return out;
}

/** encoder.go getFieldEncoder: amino.encoding first, then cosmos_proto.scalar. */
function fieldEncoder(f: SchemaField): ((values: WireValue[]) => Json) | undefined {
  if (f.e === "legacy_coins") return (values) => (values.length === 0 ? [] : renderList(f, values));
  if (f.e === "inline_json") {
    return (values) => sortedJson(JSON.parse(values.length ? utf8Decoder.decode(values[values.length - 1].bytes!) : ""));
  }
  if (f.sc === "int" || f.sc === "dec") {
    if (f.r) throw new Error(`unsupported repeated ${f.sc} scalar ${f.n}`);
    return (values) => {
      const last = values[values.length - 1];
      const text = last ? utf8Decoder.decode(last.bytes!) : "";
      if (text === "") return "0";
      if (f.sc === "dec") return legacyDecString(text);
      // cosmosIntEncoder: a string goes through as-is, bytes are parsed.
      return f.k === "bytes" ? BigInt(text).toString() : text;
    };
  }
  return undefined;
}

function renderValue(f: SchemaField, values: WireValue[]): Json {
  if (f.k === "map") throw new Error("maps are not supported");
  if (f.r) return values.length === 0 ? null : renderList(f, values);
  if (f.k === "message") return renderMessage(f.t!, concatBytes(values.map((v) => v.bytes!)));
  const last = values[values.length - 1];
  // dont_omitempty on an unset scalar renders the zero value.
  if (!last) return scalarJson(f.k, BigInt(0), f.k === "string" ? new Uint8Array() : undefined);
  return scalarJson(f.k, last.num, last.bytes);
}

function renderList(f: SchemaField, values: WireValue[]): Json[] {
  if (f.k === "message") return values.map((v) => renderMessage(f.t!, v.bytes!));
  if (f.k === "string" || f.k === "bytes") return values.map((v) => scalarJson(f.k, undefined, v.bytes));
  return scalarElements(f, values).map((n) => scalarJson(f.k, n, undefined));
}

function renderAny(bytes: Uint8Array): Json {
  const w = parseFields(bytes);
  const typeUrl = utf8Decoder.decode(w.get(1)?.at(-1)?.bytes ?? new Uint8Array());
  const value = w.get(2)?.at(-1)?.bytes ?? new Uint8Array();
  if (!typeUrl.startsWith("/")) throw new Error(`can't resolve type URL ${typeUrl}`);
  const typeName = typeUrl.slice(1);
  if (typeName in schema.messages) return render(typeName, value, true);
  const cfg = getNestedAminoConfig();
  const codec = cfg?.registry.lookupType(typeUrl);
  if (!cfg || !codec) {
    throw new Error(
      `can't resolve type URL ${typeUrl}: call configureNestedAminoConverter({registry, aminoTypes}) ` +
        "with a registry and AminoTypes that know it",
    );
  }
  return cfg.aminoTypes.toAmino({ typeUrl, value: codec.decode(value) }) as Json;
}

// ---------------------------------------------------------------- encode

/** Amino JSON of a message back to its protobuf bytes (the inverse of renderMessage). */
function encodeMessage(typeName: string, json: any): Uint8Array {
  const w = new Writer();
  switch (typeName) {
    case "google.protobuf.Timestamp": {
      const { seconds, nanos } = parseRfc3339(json);
      if (seconds !== BigInt(0)) w.tag(1, 0).varint(seconds);
      if (nanos !== 0) w.tag(2, 0).varint(BigInt(nanos));
      return w.finish();
    }
    case "google.protobuf.Duration": {
      const total = BigInt(json);
      const seconds = total / BigInt(1_000_000_000);
      const nanos = total % BigInt(1_000_000_000);
      if (seconds !== BigInt(0)) w.tag(1, 0).varint(seconds);
      if (nanos !== BigInt(0)) w.tag(2, 0).varint(nanos);
      return w.finish();
    }
    case "google.protobuf.Any": {
      const { typeUrl, value } = encodeAny(json);
      w.bytes(1, utf8Encoder.encode(typeUrl));
      if (value.length) w.bytes(2, value);
      return w.finish();
    }
  }
  const md = schema.messages[typeName];
  if (!md) throw new Error(`amino schema has no message ${typeName}`);
  if (md.me) throw new Error(`amino message_encoding ${md.me} (${typeName}) is not supported`);
  if (json === null || typeof json !== "object") throw new Error(`${typeName}: expected an object`);

  for (const f of md.f) {
    let value: any;
    let present = false;
    if (f.o) {
      const wrapper = json[f.o[0]];
      if (!wrapper || wrapper.type !== f.o[1] || !wrapper.value || !(f.n in wrapper.value)) continue;
      value = wrapper.value[f.n];
      present = true; // a set oneof member keeps its presence even at zero
    } else {
      value = json[f.n];
      present = !!f.pr;
    }
    if (value === undefined || value === null) continue;
    encodeField(w, f, value, present);
  }
  return w.finish();
}

function encodeField(w: Writer, f: SchemaField, value: any, present: boolean): void {
  if (f.k === "map") throw new Error("maps are not supported");
  if (f.r) {
    if (!Array.isArray(value)) throw new Error(`${f.n}: expected a list`);
    if (NUMERIC_KINDS.has(f.k)) {
      if (value.length === 0) return;
      const packed = new Writer();
      for (const el of value) writeNumeric(packed, f.k, el);
      w.bytes(f.no, packed.finish());
      return;
    }
    for (const el of value) {
      if (f.k === "message") w.bytes(f.no, encodeMessage(f.t!, el));
      else w.bytes(f.no, scalarBytes(f, el));
    }
    return;
  }
  if (f.k === "message") {
    w.bytes(f.no, encodeMessage(f.t!, value));
    return;
  }
  if (f.k === "string" || f.k === "bytes") {
    let bytes = scalarBytes(f, value);
    if (f.sc === "dec" && value === "0") bytes = new Uint8Array(); // rendered from an empty Dec
    if (bytes.length > 0 || present) w.bytes(f.no, bytes);
    return;
  }
  const n = numericValue(f.k, value);
  if (n !== BigInt(0) || present) {
    w.tag(f.no, FIXED32_KINDS.has(f.k) ? 5 : FIXED64_KINDS.has(f.k) ? 1 : 0);
    writeNumeric(w, f.k, value);
  }
}

function scalarBytes(f: SchemaField, value: any): Uint8Array {
  if (f.k === "bytes") {
    if (f.sc === "int" || f.sc === "dec") return utf8Encoder.encode(f.sc === "dec" ? legacyDecAtomics(value) : String(value));
    return fromBase64(value);
  }
  if (f.sc === "dec") return utf8Encoder.encode(value === "0" ? "" : legacyDecAtomics(value));
  return utf8Encoder.encode(String(value));
}

function numericValue(kind: string, value: any): bigint {
  if (kind === "bool") return value ? BigInt(1) : BigInt(0);
  if (kind === "float" || kind === "double") throw new Error(`amino JSON cannot encode a ${kind} field`);
  return BigInt(value);
}

function writeNumeric(w: Writer, kind: string, value: any): void {
  const n = numericValue(kind, value);
  switch (kind) {
    case "sint32":
      w.varint(zigzagEncode(n, 32));
      return;
    case "sint64":
      w.varint(zigzagEncode(n, 64));
      return;
    case "fixed32":
    case "sfixed32":
      w.fixed(n, 4);
      return;
    case "fixed64":
    case "sfixed64":
      w.fixed(n, 8);
      return;
    default:
      w.varint(n);
  }
}

function encodeAny(json: any): { typeUrl: string; value: Uint8Array } {
  const type: string = json?.type;
  if (!type) throw new Error("Any: expected {type, value}");
  const typeName = byAminoName.get(type) ?? (type.startsWith("/") && type.slice(1) in schema.messages ? type.slice(1) : undefined);
  if (typeName) return { typeUrl: `/${typeName}`, value: encodeMessage(typeName, json.value ?? {}) };
  const cfg = getNestedAminoConfig();
  if (!cfg) throw new Error(`can't resolve amino type ${type}: call configureNestedAminoConverter first`);
  const decoded = cfg.aminoTypes.fromAmino(json);
  const codec = cfg.registry.lookupType(decoded.typeUrl);
  if (!codec) throw new Error(`No proto codec registered for inner type ${decoded.typeUrl}.`);
  return { typeUrl: decoded.typeUrl, value: codec.encode(codec.fromPartial(decoded.value)).finish() };
}

// ------------------------------------------------------- non-nullable fill

/**
 * Returns value with every dont_omitempty embedded message present (empty
 * when left out), recursively. Go clients never send one absent (they are
 * gogoproto.nullable = false), but Telescope's fromPartial leaves them
 * undefined.
 * Filled on the plain value, before fromPartial, so the codec builds proper
 * defaults; a Timestamp gets the epoch.
 * Every other non-nullable message a caller leaves out is not filled here:
 * the renderer adds it the way the chain does (see chainValues).
 */
export function fillNonNullable(typeName: string, value: any): any {
  const md = schema.messages[typeName];
  if (!md || !value || typeof value !== "object") return value;
  const out: Record<string, any> = { ...value };
  for (const f of md.f) {
    if (f.k !== "message" || !f.j || !f.t) continue;
    const v = out[f.j];
    if (f.r) {
      if (Array.isArray(v) && !BUILTIN.has(f.t)) out[f.j] = v.map((el) => fillNonNullable(f.t!, el));
      continue;
    }
    if (v === undefined || v === null) {
      // Only a dont_omitempty message is filled in. Other non-nullable ones
      // stay as given; the renderer treats them as present.
      if (!f.d) continue;
      out[f.j] = f.t === "google.protobuf.Timestamp" ? new Date(0) : BUILTIN.has(f.t) ? {} : fillNonNullable(f.t, {});
      continue;
    }
    if (!BUILTIN.has(f.t)) out[f.j] = fillNonNullable(f.t, v);
  }
  return out;
}

// --------------------------------------------------------- decode + prune

/**
 * Telescope's decode fills every embedded message the bytes lack with a
 * default (createBase): an empty Coin, which re-encodes as present, or
 * `new Date()` for a Timestamp, which re-encodes as the current time. cosmjs
 * builds the signed tx body by re-encoding fromAmino's result, so clear each
 * embedded message the bytes did not carry, recursively: the body then
 * encodes back to exactly these bytes.
 */
function pruneAbsent(typeName: string, bytes: Uint8Array, value: any): any {
  const md = schema.messages[typeName];
  if (!md || !value || typeof value !== "object") return value;
  const wire = parseFields(bytes);
  for (const f of md.f) {
    if (f.k !== "message" || !f.j || !f.t) continue;
    const values = wire.get(f.no) ?? [];
    if (f.r) {
      const list = value[f.j];
      if (Array.isArray(list) && !BUILTIN.has(f.t)) {
        value[f.j] = list.map((el: any, i: number) => (values[i] ? pruneAbsent(f.t!, values[i].bytes!, el) : el));
      }
      continue;
    }
    if (values.length === 0) value[f.j] = undefined;
    else if (!BUILTIN.has(f.t)) value[f.j] = pruneAbsent(f.t, concatBytes(values.map((v) => v.bytes!)), value[f.j]);
  }
  return value;
}

// ------------------------------------------------------------ converters

export interface ChainAminoConverter {
  aminoType: string;
  toAmino: (value: any) => any;
  fromAmino: (value: any) => any;
}

/**
 * The AminoConverter map for every Msg of a proto package
 * ("sparkdream.<module>.v1"), given the module's generated tx codecs.
 */
export function chainAminoConverters(pkg: string, txModule: Record<string, any>): Record<string, ChainAminoConverter> {
  const out: Record<string, ChainAminoConverter> = {};
  for (const typeName of schema.msgs) {
    if (!typeName.startsWith(`${pkg}.`)) continue;
    const aminoType = schema.messages[typeName]?.a;
    const codec = txModule[typeName.slice(pkg.length + 1)] as Codec | undefined;
    if (!aminoType || !codec) continue;
    out[`/${typeName}`] = {
      aminoType,
      toAmino: (value: any) => {
        const bytes = codec.encode(codec.fromPartial(fillNonNullable(typeName, value))).finish();
        return (render(typeName, bytes, false) as { value: Json }).value;
      },
      fromAmino: (value: any) => {
        const bytes = encodeMessage(typeName, value ?? {});
        return pruneAbsent(typeName, bytes, codec.decode(bytes));
      },
    };
  }
  return out;
}

/** Amino JSON ({type, value}) of any message the schema describes, rendered from its protobuf bytes. */
export function renderAminoJson(typeUrl: string, bytes: Uint8Array): Json {
  return render(typeUrl.replace(/^\//, ""), bytes, false);
}
