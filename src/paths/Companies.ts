// This is Generated Source.
import GlipCompany from "../definitions/GlipCompany";
import PathSegment from "../PathSegment";

export default class Companies extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("companies", id, prv, service);
    }

    /**
     *  Returns information about a company by ID.
     */
    get(): Promise<GlipCompany> {
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
     *  Returns information about a company by ID.
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
