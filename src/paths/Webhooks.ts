// This is Generated Source.
import GlipWebhookInfo from "../definitions/GlipWebhookInfo";
import GlipWebhookList from "../definitions/GlipWebhookList";
import PathSegment from "../PathSegment";
import Activate from "./Activate";
import Suspend from "./Suspend";

export default class Webhooks extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("webhooks", id, prv, service);
    }

    /**
     * 
     */
    activate(id?: string) {
        return new Activate(this, id);
    }

    /**
     * 
     */
    suspend(id?: string) {
        return new Suspend(this, id);
    }

    /**
     *  Create new Webhook
     */
    post(): Promise<GlipWebhookInfo> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Create new Webhook
     *  return {ApiResponse}
     */
    postRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Returns webhooks which are available for the current user (by group ID).
     */
    list(): Promise<GlipWebhookList> {
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
     *  Returns webhooks which are available for the current user (by group ID).
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

    /**
     *  Deletes the webhook by ID.
     */
    delete(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }

    /**
     *  Deletes the webhook by ID.
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }
}
