// This is Generated Source.
import INotificationSettings from "../definitions/NotificationSettings";
import NotificationSettingsUpdateRequest from "../definitions/NotificationSettingsUpdateRequest";
import PathSegment from "../PathSegment";

export default class NotificationSettings extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("notification-settings", id, prv, service);
    }

    /**
     *  <p>Returns notification settings for the current extension.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadMessagesNotificationsSettings</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadMessagesNotificationsSettings] permission for requested resource.</td></tr> </tbody></table>								
     */
    get(): Promise<INotificationSettings> {
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
     *  <p>Returns notification settings for the current extension.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadMessagesNotificationsSettings</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadMessagesNotificationsSettings] permission for requested resource.</td></tr> </tbody></table>								
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
     *  <p>Updates notification settings for the current extension.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditMessagesNotificationsSettings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-109</td><td>Feature VoicemailToText is unavailable</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr> </tbody></table>								
     */
    put(body: NotificationSettingsUpdateRequest): Promise<INotificationSettings> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Updates notification settings for the current extension.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditMessagesNotificationsSettings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-109</td><td>Feature VoicemailToText is unavailable</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    putRaw(body: NotificationSettingsUpdateRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}
