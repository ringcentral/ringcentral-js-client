// This is Generated Source.
import UrlSection from "../../UrlSection";
import {GroupInfo} from "../GroupInfo";
import PagingResult from "../../PagingResult";

export default class Group extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("group", id , prv, service);
    }

    /**
        Get Contact Group List
    */
    list(): Promise<PagingResult<GroupInfo>> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: null, body: null }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Contact Group by ID
    */
    get(): Promise<GroupInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: null, body: null }).then(function (res) {
            return res.json();
        });
    }
}
