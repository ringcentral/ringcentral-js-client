// This is Generated Source.
import CreateSubscriptionRequest from "../definitions/CreateSubscriptionRequest";
import ModifySubscriptionRequest from "../definitions/ModifySubscriptionRequest";
import RecordsCollectionResourceSubscriptionResponse from "../definitions/RecordsCollectionResourceSubscriptionResponse";
import SubscriptionInfo from "../definitions/SubscriptionInfo";
import PathSegment from "../PathSegment";
import Renew from "./Renew";

export default class Subscription extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("subscription", id, prv, service);
    }

    /**
     * 
     */
    renew(id?: string) {
        return new Renew(this, id);
    }

    /**
     *  
     */
    list(): Promise<RecordsCollectionResourceSubscriptionResponse> {
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
     *  
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
     *  <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Creates a new subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    post(body: CreateSubscriptionRequest): Promise<SubscriptionInfo> {
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
     *  <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Creates a new subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    postRaw(body: CreateSubscriptionRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Returns the requested subscription.</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    get(): Promise<SubscriptionInfo> {
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
     *  <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Returns the requested subscription.</p><h4>Usage Plan Group</h4><p>Light</p>
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

    /**
     *  <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Renews the existent subscription if the request body is empty. If event filters are specified, calling this method modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications in the frame of one subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    put(body: ModifySubscriptionRequest, query?: PutQuery): Promise<SubscriptionInfo> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p><p>Renews the existent subscription if the request body is empty. If event filters are specified, calling this method modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications in the frame of one subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    putRaw(body: ModifySubscriptionRequest, query?: PutQuery): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: query,
        });
    }

    /**
     *  <p style='font-style:italic;'></p><p>Cancels the existent subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p style='font-style:italic;'></p><p>Cancels the existent subscription.</p><h4>Usage Plan Group</h4><p>Medium</p>
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

export interface PutQuery {

    /**
     * If 'True' then aggregated presence status is returned in a notification payload
     */
    aggregated?: boolean;
}
