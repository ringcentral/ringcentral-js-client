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
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Contact Group List
     *  return {ApiResponse}
     */
    listRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    }
}
