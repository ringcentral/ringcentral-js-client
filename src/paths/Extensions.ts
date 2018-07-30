// This is Generated Source.
import PathSegment from "../PathSegment";

export default class Extensions extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("extensions", id, prv, service);
    }

    /**
     *  <p>Returns the list of extensions to be recorded.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyInfo</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Returns the list of extensions to be recorded.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyInfo</p><h4>Usage Plan Group</h4><p>Medium</p>
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
