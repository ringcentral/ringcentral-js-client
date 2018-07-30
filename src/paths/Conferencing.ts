// This is Generated Source.
import GetConferencingInfoResponse from "../definitions/GetConferencingInfoResponse";
import UpdateConferencingInfoRequest from "../definitions/UpdateConferencingInfoRequest";
import PathSegment from "../PathSegment";

export default class Conferencing extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("conferencing", id, prv, service);
    }

    /**
     *  <p>Returns the information on the Free Conference Calling (FCC) feature for a given extension.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>OrganizeConference</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-112</td><td>Feature [Conferencing] is not available for current extension type</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [OrganizeConference] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr><tr><td>503</td><td>FCC-103</td><td>Conference group is not set for current account</td></tr> </tbody></table>								
     */
    get(query?: GetQuery): Promise<GetConferencingInfoResponse> {
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
     *  <p>Returns the information on the Free Conference Calling (FCC) feature for a given extension.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>OrganizeConference</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-112</td><td>Feature [Conferencing] is not available for current extension type</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [OrganizeConference] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr><tr><td>503</td><td>FCC-103</td><td>Conference group is not set for current account</td></tr> </tbody></table>								
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
     *  <p>Updates the default conferencing number for the current extension. The number can be selected from conferencing numbers of the current extension. Updates the setting, allowing participants join the conference before host.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>OrganizeConference</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [allowJoinBeforeHost, phoneNumbers] value is invalid</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [OrganizeConference] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr><tr><td>503</td><td>CMN-201</td><td>Service Temporary Unavailable</td></tr> </tbody></table>								
     */
    put(body: UpdateConferencingInfoRequest): Promise<GetConferencingInfoResponse> {
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
     *  <p>Updates the default conferencing number for the current extension. The number can be selected from conferencing numbers of the current extension. Updates the setting, allowing participants join the conference before host.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>OrganizeConference</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [allowJoinBeforeHost, phoneNumbers] value is invalid</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [OrganizeConference] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr><tr><td>503</td><td>CMN-201</td><td>Service Temporary Unavailable</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    putRaw(body: UpdateConferencingInfoRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}

export interface GetQuery {

    /**
     * Internal identifier of a country. If not specified, the response is returned for the brand country
     */
    countryId?: string;
}
