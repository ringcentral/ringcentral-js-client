// This is Generated Source.
import CreateVoicemail from "../definitions/CreateVoicemail";
import PathSegment from "../PathSegment";

export default class Voicemail extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("voicemail", id, prv, service);
    }

    /**
     *  Sends a voicemail.
     */
    post(body: CreateVoicemail): Promise<void> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Sends a voicemail.
     *  return {ApiResponse}
     */
    postRaw(body: CreateVoicemail): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
