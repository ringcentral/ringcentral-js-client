// This is Generated Source.
import GlipCompany from "../definitions/GlipCompany";
import PathSegment from "../PathSegment";

export default class Companies extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("companies", id, prv, service);
    }

    /**
     *  <p>Returns information about a company by ID.</p><h4>App Permission</h4><p>Glip</p><h4>User Permission</h4><p>Glip</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Returns information about a company by ID.</p><h4>App Permission</h4><p>Glip</p><h4>User Permission</h4><p>Glip</p><h4>Usage Plan Group</h4><p>Light</p>
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
