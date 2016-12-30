// This is Generated Source.
import GroupInfo from "../definitions/GroupInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class Group extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("group", id, prv, service);
    }

    /**
     *  Get Contact Group List
     */
    list(): Promise<PagingResult<GroupInfo>> {
        return this._send("get", false, undefined, undefined).then((res) => {
            return res.json();
        });
    }

    /**
     *  Get Contact Group by ID
     */
    get(): Promise<GroupInfo> {
        return this._send("get", true, undefined, undefined).then((res) => {
            return res.json();
        });
    }
}
