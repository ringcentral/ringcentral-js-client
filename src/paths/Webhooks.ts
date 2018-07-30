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
     *  <p>Create new Webhook</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Create new Webhook</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Returns webhooks which are available for the current user (by group ID).</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Returns webhooks which are available for the current user (by group ID).</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Deletes the webhook by ID.</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Deletes the webhook by ID.</p><h4>Usage Plan Group</h4><p>Medium</p>
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
