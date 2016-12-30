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
        return this._send("post", true, body, undefined).then((res) => {
            return res.json();
        });
    }

    /**
     *  Get Blocked Number List
     */
    list(): Promise<PagingResult<BlockedNumberInfo>> {
        return this._send("get", false, undefined, undefined).then((res) => {
            return res.json();
        });
    }

    /**
     *  Delete Blocked Number by ID
     */
    delete(): Promise<void> {
        return this._send("delete", true, undefined, undefined).then((res) => {
            return res.response();
        });
    }

    /**
     *  Get Blocked Number by ID
     */
    get(): Promise<BlockedNumberInfo> {
        return this._send("get", true, undefined, undefined).then((res) => {
            return res.json();
        });
    }

    /**
     *  Update Blocked Number Label
     */
    put(body: BlockedNumberInfo): Promise<BlockedNumberInfo> {
        return this._send("put", true, body, undefined).then((res) => {
            return res.json();
        });
    }
}
