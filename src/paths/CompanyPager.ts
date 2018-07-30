// This is Generated Source.
import CreateInternalTextMessageRequest from "../definitions/CreateInternalTextMessageRequest";
import GetMessageInfoResponse from "../definitions/GetMessageInfoResponse";
import PathSegment from "../PathSegment";

export default class CompanyPager extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("company-pager", id, prv, service);
    }

    /**
     *  <p>Creates and sends an internal text message.</p><h4>App Permission</h4><p>InternalMessages</p><h4>User Permission</h4><p>InternalSMS</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [to.phoneNumber] value is invalid</td></tr><tr><td>400</td><td>CMN-102</td><td>Resource for parameter [to] is not found</td></tr><tr><td>400</td><td>MSG-316</td><td>Parameter [to] value [102] is invalid [Target extension not found]</td></tr><tr><td>400</td><td>MSG-324</td><td>Extension is of unappropriate state</td></tr><tr><td>400</td><td>MSG-331</td><td>Parameter [from] value [11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111] is invalid [Sender extension number does not correspond to logged in extension]</td></tr><tr><td>400</td><td>MSG-332</td><td>Parameter [from] value [404544780008] is invalid [Sender extension id does not correspond to logged in extension]</td></tr><tr><td>400</td><td>MSG-335</td><td>Recipient extension number does not correspond to ID</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [InternalMessages] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [InternalSMS] permission for requested resource.</td></tr><tr><td>403</td><td>MSG-325</td><td>Reply is forbidden for old message threads</td></tr><tr><td>403</td><td>MSG-326</td><td>Reply is denied for user, who is no longer a thread participant</td></tr><tr><td>403</td><td>MSG-330</td><td>Sender extension is of unappropriate type</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    post(body: CreateInternalTextMessageRequest): Promise<GetMessageInfoResponse> {
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
     *  <p>Creates and sends an internal text message.</p><h4>App Permission</h4><p>InternalMessages</p><h4>User Permission</h4><p>InternalSMS</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [to.phoneNumber] value is invalid</td></tr><tr><td>400</td><td>CMN-102</td><td>Resource for parameter [to] is not found</td></tr><tr><td>400</td><td>MSG-316</td><td>Parameter [to] value [102] is invalid [Target extension not found]</td></tr><tr><td>400</td><td>MSG-324</td><td>Extension is of unappropriate state</td></tr><tr><td>400</td><td>MSG-331</td><td>Parameter [from] value [11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111] is invalid [Sender extension number does not correspond to logged in extension]</td></tr><tr><td>400</td><td>MSG-332</td><td>Parameter [from] value [404544780008] is invalid [Sender extension id does not correspond to logged in extension]</td></tr><tr><td>400</td><td>MSG-335</td><td>Recipient extension number does not correspond to ID</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [InternalMessages] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [InternalSMS] permission for requested resource.</td></tr><tr><td>403</td><td>MSG-325</td><td>Reply is forbidden for old message threads</td></tr><tr><td>403</td><td>MSG-326</td><td>Reply is denied for user, who is no longer a thread participant</td></tr><tr><td>403</td><td>MSG-330</td><td>Sender extension is of unappropriate type</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(body: CreateInternalTextMessageRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
