// This is Generated Source.
import AccountPresenceInfo from "../definitions/AccountPresenceInfo";
import GetPresenceInfo from "../definitions/GetPresenceInfo";
import PresenceInfoResource from "../definitions/PresenceInfoResource";
import PathSegment from "../PathSegment";
import Meetings from "./Meetings";

export default class Presence extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("presence", id, prv, service);
    }

    /**
     * 
     */
    meetings(id?: string) {
        return new Meetings(this, id);
    }

    /**
     *  <p>Returns presence status of an extension or several extensions by their ID(s). Batch request is supported. The &#39;presenceStatus&#39; is returned as Offline (the parameters &#39;telephonyStatus&#39;, &#39;message&#39;, &#39;userStatus&#39; and &#39;dndStatus&#39; are not returned at all) for the following extension types: Department/Announcement Only/Take Messages Only (Voicemail)/Fax User/Paging Only Group/Shared Lines Group/IVR Menu/Application Extension/Park Location.If the user requests his/her own presence status, the response contains actual presence status even if the status publication is turned off. Batch request is supported. For batch requests the number of extensions in one request is limited to 30. If more extensions are included in the request, the error code 400 Bad Request is returned with the logical error code InvalidMultipartRequest and the corresponding message &#39;Extension Presence Info multipart request is limited to 30 extensions&#39;.</p><h4>App Permission</h4><p>ReadPresence</p><h4>User Permission</h4><p>ReadPresenceStatus</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadPresenceStatus] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    get(query?: GetQuery): Promise<GetPresenceInfo> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Returns presence status of an extension or several extensions by their ID(s). Batch request is supported. The &#39;presenceStatus&#39; is returned as Offline (the parameters &#39;telephonyStatus&#39;, &#39;message&#39;, &#39;userStatus&#39; and &#39;dndStatus&#39; are not returned at all) for the following extension types: Department/Announcement Only/Take Messages Only (Voicemail)/Fax User/Paging Only Group/Shared Lines Group/IVR Menu/Application Extension/Park Location.If the user requests his/her own presence status, the response contains actual presence status even if the status publication is turned off. Batch request is supported. For batch requests the number of extensions in one request is limited to 30. If more extensions are included in the request, the error code 400 Bad Request is returned with the logical error code InvalidMultipartRequest and the corresponding message &#39;Extension Presence Info multipart request is limited to 30 extensions&#39;.</p><h4>App Permission</h4><p>ReadPresence</p><h4>User Permission</h4><p>ReadPresenceStatus</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadPresenceStatus] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    }

    /**
     *  <p>Updates user-defined extension presence status, status message and DnD status by extension ID. Supported for regular User extensions only. The extension types listed do not support presence status: Department, Announcement Only, Take Messages Only (Voicemail), Fax User, Paging Only Group, Shared Lines Group, IVR Menu, Application Extension.</p><h4>App Permission</h4><p>EditPresence</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [allowSeeMyPresence] value is invalid</td></tr><tr><td>403</td><td>BIL-103</td><td>Feature [DND] is not available for current account</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditPresenceSettings] permission for requested resource.</td></tr><tr><td>403</td><td>PRS-105</td><td>Not allowed update presence for extensions having Disabled state</td></tr><tr><td>403</td><td>PRS-106</td><td>Not allowed update presence for extensions of Department type</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    put(body: PresenceInfoResource): Promise<PresenceInfoResource> {
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
     *  <p>Updates user-defined extension presence status, status message and DnD status by extension ID. Supported for regular User extensions only. The extension types listed do not support presence status: Department, Announcement Only, Take Messages Only (Voicemail), Fax User, Paging Only Group, Shared Lines Group, IVR Menu, Application Extension.</p><h4>App Permission</h4><p>EditPresence</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [allowSeeMyPresence] value is invalid</td></tr><tr><td>403</td><td>BIL-103</td><td>Feature [DND] is not available for current account</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditPresenceSettings] permission for requested resource.</td></tr><tr><td>403</td><td>PRS-105</td><td>Not allowed update presence for extensions having Disabled state</td></tr><tr><td>403</td><td>PRS-106</td><td>Not allowed update presence for extensions of Department type</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    putRaw(body: PresenceInfoResource): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  <p>Returns presence status of all extensions of an account. Please note: The presenceStatus is returned as Offline (the parameters telephonyStatus, message, userStatus and dndStatus are not returned at all) for the following extension types: Department, Announcement Only, Voicemail (Take Messages Only), Fax User, Paging Only Group, Shared Lines Group, IVR Menu, Application Extension.</p><h4>App Permission</h4><p>ReadPresence</p><h4>User Permission</h4><p>ReadPresenceStatus</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<AccountPresenceInfo> {
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
     *  <p>Returns presence status of all extensions of an account. Please note: The presenceStatus is returned as Offline (the parameters telephonyStatus, message, userStatus and dndStatus are not returned at all) for the following extension types: Department, Announcement Only, Voicemail (Take Messages Only), Fax User, Paging Only Group, Shared Lines Group, IVR Menu, Application Extension.</p><h4>App Permission</h4><p>ReadPresence</p><h4>User Permission</h4><p>ReadPresenceStatus</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
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
}

export interface GetQuery {

    /**
     * Whether to return detailed telephony state
     */
    detailedTelephonyState?: boolean;

    /**
     * Whether to return SIP data
     */
    sipData?: boolean;
}

export interface ListQuery {

    /**
     * Whether to return detailed telephony state
     */
    detailedTelephonyState?: boolean;

    /**
     * Whether to return SIP data
     */
    sipData?: boolean;

    /**
     * Page number for accoount presence information
     */
    page?: number;

    /**
     * Number for accoount presence information items per page
     */
    perPage?: number;
}
