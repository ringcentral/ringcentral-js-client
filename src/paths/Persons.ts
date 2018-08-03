// This is Generated Source.
import GlipPersonInfo from "../definitions/GlipPersonInfo";
import PathSegment from "../PathSegment";

export default class Persons extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("persons", id, prv, service);
    }

    /**
     *  Returns a user or multiple users by their ID(s). Batch request is supported.
     */
    get(): Promise<GlipPersonInfo> {
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
     *  Returns a user or multiple users by their ID(s). Batch request is supported.
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
