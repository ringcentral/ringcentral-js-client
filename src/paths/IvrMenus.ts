// This is Generated Source.
import IvrMenuInfo from "../definitions/IvrMenuInfo";
import PathSegment from "../PathSegment";

export default class IvrMenus extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("ivr-menus", id, prv, service);
    }

    /**
     *  <p>Returns a company IVR menu by ID.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>AutoReceptionist</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    get(): Promise<IvrMenuInfo> {
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
     *  <p>Returns a company IVR menu by ID.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>AutoReceptionist</p><h4>Usage Plan Group</h4><p>Medium</p>
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
