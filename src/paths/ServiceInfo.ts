// This is Generated Source.
import MeetingServiceInfoResource from "../definitions/MeetingServiceInfoResource";
import PathSegment from "../PathSegment";

export default class ServiceInfo extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("service-info", id, prv, service);
    }

    /**
     *  <p>Returns information on dial-in numbers for meetings, support and international dial-in numbers URIs and meeting account information.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [Meetings] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [Meetings] permission for requested resource.</td></tr> </tbody></table>								
     */
    get(): Promise<MeetingServiceInfoResource> {
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
     *  <p>Returns information on dial-in numbers for meetings, support and international dial-in numbers URIs and meeting account information.</p><h4>App Permission</h4><p>Meetings</p><h4>User Permission</h4><p>Meetings</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [Meetings] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [Meetings] permission for requested resource.</td></tr> </tbody></table>								
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
