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
     *  <p>Returns call recording settings.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyInfo</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Returns call recording settings.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyInfo</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Updates current call recording settings</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>EditCompanyInfo</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Updates current call recording settings</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>EditCompanyInfo</p><h4>Usage Plan Group</h4><p>Medium</p>
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
