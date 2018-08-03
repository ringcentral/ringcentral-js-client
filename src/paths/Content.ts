// This is Generated Source.
import PathSegment from "../PathSegment";

export default class Content extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("content", id, prv, service);
    }

    /**
     *  Returns media content of a call recording.
     */
    get(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  Returns media content of a call recording.
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
