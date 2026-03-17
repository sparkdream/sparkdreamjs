//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateOperationalParams, MsgUpdateOperationalParamsResponse, MsgCreateSession, MsgCreateSessionResponse, MsgRevokeSession, MsgRevokeSessionResponse, MsgExecSession, MsgExecSessionResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * UpdateOperationalParams defines an operation for updating the module's
   * operational parameters. Authorized for Commons Council Operations Committee.
   */
  updateOperationalParams(request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse>;
  /** CreateSession creates a new session key delegation. */
  createSession(request: MsgCreateSession): Promise<MsgCreateSessionResponse>;
  /** RevokeSession revokes an active session. */
  revokeSession(request: MsgRevokeSession): Promise<MsgRevokeSessionResponse>;
  /** ExecSession executes messages using a session key. */
  execSession(request: MsgExecSession): Promise<MsgExecSessionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a (governance) operation for updating the module
   parameters. The authority defaults to the x/gov module account. */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* UpdateOperationalParams defines an operation for updating the module's
   operational parameters. Authorized for Commons Council Operations Committee. */
  updateOperationalParams = async (request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse> => {
    const data = MsgUpdateOperationalParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "UpdateOperationalParams", data);
    return promise.then(data => MsgUpdateOperationalParamsResponse.decode(new BinaryReader(data)));
  };
  /* CreateSession creates a new session key delegation. */
  createSession = async (request: MsgCreateSession): Promise<MsgCreateSessionResponse> => {
    const data = MsgCreateSession.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "CreateSession", data);
    return promise.then(data => MsgCreateSessionResponse.decode(new BinaryReader(data)));
  };
  /* RevokeSession revokes an active session. */
  revokeSession = async (request: MsgRevokeSession): Promise<MsgRevokeSessionResponse> => {
    const data = MsgRevokeSession.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "RevokeSession", data);
    return promise.then(data => MsgRevokeSessionResponse.decode(new BinaryReader(data)));
  };
  /* ExecSession executes messages using a session key. */
  execSession = async (request: MsgExecSession): Promise<MsgExecSessionResponse> => {
    const data = MsgExecSession.encode(request).finish();
    const promise = this.rpc.request("sparkdream.session.v1.Msg", "ExecSession", data);
    return promise.then(data => MsgExecSessionResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};