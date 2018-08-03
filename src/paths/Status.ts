// This is Generated Source.
import PathSegment from "../PathSegment";

export default class Status extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("status", id, prv, service);
    }

    /**
     *  Returns current PAS service status.
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
     *  Returns current PAS service status.
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
