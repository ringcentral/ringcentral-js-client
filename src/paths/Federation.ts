// This is Generated Source.
import FederationResource from "../definitions/FederationResource";
import PathSegment from "../PathSegment";

export default class Federation extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("federation", id, prv, service);
    }

    /**
     *  <p>Returns information on a federation and associated accounts.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyInfo</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    get(): Promise<FederationResource> {
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
     *  <p>Returns information on a federation and associated accounts.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyInfo</p><h4>Usage Plan Group</h4><p>Medium</p>
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
