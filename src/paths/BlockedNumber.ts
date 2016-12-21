// This is Generated Source.
import BlockedNumberInfo from "../definitions/BlockedNumberInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class BlockedNumber extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("blocked-number", id, prv, service);
    }

    /**
     *  Add New Blocked Number
     */
    post(body: BlockedNumberInfo): Promise<BlockedNumberInfo> {
        return this.getService().send({
          body: body,
          method: "post",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Get Blocked Number List
     */
    list(): Promise<PagingResult<BlockedNumberInfo>> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(false),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Delete Blocked Number by ID
     */
    delete(): Promise<void> {
        return this.getService().send({
          body: undefined,
          method: "delete",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.response();
        });
    }

    /**
     *  Get Blocked Number by ID
     */
    get(): Promise<BlockedNumberInfo> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Update Blocked Number Label
     */
    put(body: BlockedNumberInfo): Promise<BlockedNumberInfo> {
        return this.getService().send({
          body: body,
          method: "put",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }
}
