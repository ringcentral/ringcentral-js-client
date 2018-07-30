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
     *  <p>Returns a list of subscriptions created by a particular user on a particular client app.</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Returns a list of subscriptions created by a particular user on a particular client app.</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Creates a new subscription.</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [deliveryMode.verificationToken] value is invalid</td></tr><tr><td>400</td><td>SUB-515</td><td>Subscription containing only reminder filter is not allowed</td></tr><tr><td>400</td><td>SUB-522</td><td>WebHook responds with incorrect HTTP status. HTTP status is 500</td></tr><tr><td>400</td><td>SUB-525</td><td>WebHook server response is invalid</td></tr><tr><td>401</td><td>AGW-401</td><td>Authorization header is not specified</td></tr><tr><td>401</td><td>AGW-402</td><td>Invalid Authorization header</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>403</td><td>SUB-406</td><td>Not allowed subscribe for events to extensions of other account</td></tr><tr><td>403</td><td>SUB-408</td><td>Not allowed subscribe for unknown user</td></tr><tr><td>403</td><td>SUB-505</td><td>Subscriptions limit exceeded</td></tr><tr><td>403</td><td>SUB-518</td><td>Not allowed subscribe for favorite contacts list changes of another extension</td></tr><tr><td>403</td><td>SUB-527</td><td>Not allowed subscribe for missed calls of another extension</td></tr><tr><td>403</td><td>SUB-528</td><td>[SubscriptionAPNS] application permission is required for [PubNub/APNS] transport</td></tr><tr><td>403</td><td>SUB-530</td><td>Not allowed subscribe for incoming calls of another extension</td></tr><tr><td>403</td><td>SUB-531</td><td>Not allowed subscribe for presence of presence-lines of another extension</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [dashboardId] is not found</td></tr> </tbody></table>								
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
     *  <p>Creates a new subscription.</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [deliveryMode.verificationToken] value is invalid</td></tr><tr><td>400</td><td>SUB-515</td><td>Subscription containing only reminder filter is not allowed</td></tr><tr><td>400</td><td>SUB-522</td><td>WebHook responds with incorrect HTTP status. HTTP status is 500</td></tr><tr><td>400</td><td>SUB-525</td><td>WebHook server response is invalid</td></tr><tr><td>401</td><td>AGW-401</td><td>Authorization header is not specified</td></tr><tr><td>401</td><td>AGW-402</td><td>Invalid Authorization header</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>403</td><td>SUB-406</td><td>Not allowed subscribe for events to extensions of other account</td></tr><tr><td>403</td><td>SUB-408</td><td>Not allowed subscribe for unknown user</td></tr><tr><td>403</td><td>SUB-505</td><td>Subscriptions limit exceeded</td></tr><tr><td>403</td><td>SUB-518</td><td>Not allowed subscribe for favorite contacts list changes of another extension</td></tr><tr><td>403</td><td>SUB-527</td><td>Not allowed subscribe for missed calls of another extension</td></tr><tr><td>403</td><td>SUB-528</td><td>[SubscriptionAPNS] application permission is required for [PubNub/APNS] transport</td></tr><tr><td>403</td><td>SUB-530</td><td>Not allowed subscribe for incoming calls of another extension</td></tr><tr><td>403</td><td>SUB-531</td><td>Not allowed subscribe for presence of presence-lines of another extension</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [dashboardId] is not found</td></tr> </tbody></table>								
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
     *  <p>Returns the requested subscription.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [subscriptionId] is not found</td></tr><tr><td>404</td><td>CMN-120</td><td>Invalid URI</td></tr> </tbody></table>								
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
     *  <p>Returns the requested subscription.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [subscriptionId] is not found</td></tr><tr><td>404</td><td>CMN-120</td><td>Invalid URI</td></tr> </tbody></table>								
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
     *  <p>Renews the existent subscription if the request body is empty. If event filters are specified, calling this method modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications in the frame of one subscription.</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [subscriptionId] is not found</td></tr> </tbody></table>								
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
     *  <p>Renews the existent subscription if the request body is empty. If event filters are specified, calling this method modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications in the frame of one subscription.</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [subscriptionId] is not found</td></tr> </tbody></table>								
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
     *  <p>Cancels the existent subscription.</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [subscriptionId] is not found</td></tr> </tbody></table>								
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
     *  <p>Cancels the existent subscription.</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [subscriptionId] is not found</td></tr> </tbody></table>								
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
