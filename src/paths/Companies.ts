// This is Generated Source.
import GlipCompany from "../definitions/GlipCompany";
import PathSegment from "../PathSegment";

export default class Companies extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("companies", id, prv, service);
    }

    /**
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Returns a company by ID.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Light</p>
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
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Returns a company by ID.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Light</p>
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
