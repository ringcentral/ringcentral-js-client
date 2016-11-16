// This is Generated Source.
import PathSegment from "../PathSegment";
import GroupInfo from "../definitions/GroupInfo";
import PagingResult from "../PagingResult";

export default class Group extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("group", id , prv, service);
    }

    /**
        Get Contact Group List
    */
    list(): Promise<PagingResult<GroupInfo>> {
        return this.getService().send({method: "get", url: this.getEndpoint(false), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Contact Group by ID
    */
    get(): Promise<GroupInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }
}
