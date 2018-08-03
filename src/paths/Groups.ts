// This is Generated Source.
import GlipCreateGroup from "../definitions/GlipCreateGroup";
import GlipGroupInfo from "../definitions/GlipGroupInfo";
import GlipGroupList from "../definitions/GlipGroupList";
import PathSegment from "../PathSegment";
import BulkAssign from "./BulkAssign";
import Posts from "./Posts";
import Webhooks from "./Webhooks";

export default class Groups extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("groups", id, prv, service);
    }

    /**
     * 
     */
    bulkAssign(id?: string) {
        return new BulkAssign(this, id);
    }

    /**
     * 
     */
    posts(id?: string) {
        return new Posts(this, id);
    }

    /**
     * Internal identifier of a webhook
     */
    webhooks(id?: string) {
        return new Webhooks(this, id);
    }

    /**
     *  Returns the list of groups where the user is a member.
     */
    list(query?: ListQuery): Promise<GlipGroupList> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Returns the list of groups where the user is a member.
     *  return {ApiResponse}
     */
    listRaw(query?: ListQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    }

    /**
     *  Creates a new private chat/team.
     */
    post(body: GlipCreateGroup): Promise<GlipGroupInfo> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Creates a new private chat/team.
     *  return {ApiResponse}
     */
    postRaw(body: GlipCreateGroup): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Returns information about a group or multiple groups by their ID(s). Batch request is supported.
     */
    get(): Promise<GlipGroupInfo> {
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
     *  Returns information about a group or multiple groups by their ID(s). Batch request is supported.
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

export interface ListQuery {

    /**
     * Type of groups to be fetched (by default all type of groups will be fetched)
     */
    type?: "Group" | "Team" | "PrivateChat";

    /**
     * Max number of groups to be fetched by one request (Not more than 250).
     */
    recordCount?: number;

    /**
     * Pagination token.
     */
    pageToken?: string;
}
