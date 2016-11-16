// This is Generated Source.
import UrlSection from "../../UrlSection";
import {BlockedNumberInfo} from "../BlockedNumberInfo";
import PagingResult from "../../PagingResult";

export default class BlockedNumber extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("blocked-number", id , prv, service);
    }

    /**
        Add New Blocked Number
    */
    post(body: BlockedNumberInfo): Promise<BlockedNumberInfo> {
        return this.getService().send({method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Blocked Number List
    */
    list(): Promise<PagingResult<BlockedNumberInfo>> {
        return this.getService().send({method: "get", url: this.getEndpoint(false), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }

    /**
        Delete Blocked Number by ID
    */
    delete(): Promise<void> {
        return this.getService().send({method: "delete", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.response();
        });
    }

    /**
        Get Blocked Number by ID
    */
    get(): Promise<BlockedNumberInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }

    /**
        Update Blocked Number Label
    */
    put(body: BlockedNumberInfo): Promise<BlockedNumberInfo> {
        return this.getService().send({method: "put", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    }
}
