// This is Generated Source.
import IvrMenuInfo from "../definitions/IvrMenuInfo";
import PathSegment from "../PathSegment";

export default class IvrMenus extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("ivr-menus", id, prv, service);
    }

    /**
     *  Returns a company IVR menu by ID.
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
     *  Returns a company IVR menu by ID.
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
