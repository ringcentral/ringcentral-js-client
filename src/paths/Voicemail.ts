// This is Generated Source.
import CreateVoicemail from "../definitions/CreateVoicemail";
import PathSegment from "../PathSegment";

export default class Voicemail extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("voicemail", id, prv, service);
    }

    /**
     *  <p>Sends a voicemail.</p><h4>App Permission</h4><p>Voicemail</p><h4>User Permission</h4><p>Voicemail</p><h4>Usage Plan Group</h4><p>Heavy</p>
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
     *  <p>Sends a voicemail.</p><h4>App Permission</h4><p>Voicemail</p><h4>User Permission</h4><p>Voicemail</p><h4>Usage Plan Group</h4><p>Heavy</p>
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
