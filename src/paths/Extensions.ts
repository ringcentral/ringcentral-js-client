// This is Generated Source.
import PathSegment from "../PathSegment";

export default class Extensions extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("extensions", id, prv, service);
    }

    /**
     *  Returns the list of extensions to be recorded.
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
     *  Returns the list of extensions to be recorded.
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
