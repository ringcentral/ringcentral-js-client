// This is Generated Source.
import PathSegment from "../PathSegment";

export default class Status extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("status", id, prv, service);
    }

    /**
     *  <p>Returns current PAS service status.</p><h4>Usage Plan Group</h4><p>NoThrottling</p>
     */
    get(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  <p>Returns current PAS service status.</p><h4>Usage Plan Group</h4><p>NoThrottling</p>
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
}
