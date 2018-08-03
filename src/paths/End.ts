// This is Generated Source.
import PathSegment from "../PathSegment";

export default class End extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("end", id, prv, service);
    }

    /**
     *  Ends a meetings which is in progress.
     */
    post(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Ends a meetings which is in progress.
     *  return {ApiResponse}
     */
    postRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
