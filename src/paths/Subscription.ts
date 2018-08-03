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
     *  Returns a list of subscriptions created by a particular user on a particular client app.
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
     *  Returns a list of subscriptions created by a particular user on a particular client app.
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
     *  Creates a new subscription.
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
     *  Creates a new subscription.
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
     *  Returns the requested subscription.
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
     *  Returns the requested subscription.
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
     *  Renews the existent subscription if the request body is empty. If event filters are specified, calling this method modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications in the frame of one subscription.
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
     *  Renews the existent subscription if the request body is empty. If event filters are specified, calling this method modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications in the frame of one subscription.
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
     *  Cancels the existent subscription.
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
     *  Cancels the existent subscription.
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
