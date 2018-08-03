// This is Generated Source.
import CallRecordingSettingsResource from "../definitions/CallRecordingSettingsResource";
import PathSegment from "../PathSegment";
import Extensions from "./Extensions";
import BulkAssign from "./BulkAssign";
import CustomGreetings from "./CustomGreetings";

export default class CallRecording extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("call-recording", id, prv, service);
    }

    /**
     * 
     */
    extensions(id?: string) {
        return new Extensions(this, id);
    }

    /**
     * 
     */
    bulkAssign(id?: string) {
        return new BulkAssign(this, id);
    }

    /**
     * 
     */
    customGreetings(id?: string) {
        return new CustomGreetings(this, id);
    }

    /**
     *  Returns call recording settings.
     */
    get(): Promise<CallRecordingSettingsResource> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Returns call recording settings.
     *  return {ApiResponse}
     */
    getRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  Updates current call recording settings
     */
    put(body: CallRecordingSettingsResource): Promise<CallRecordingSettingsResource> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Updates current call recording settings
     *  return {ApiResponse}
     */
    putRaw(body: CallRecordingSettingsResource): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}
