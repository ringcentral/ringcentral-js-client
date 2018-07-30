// This is Generated Source.
import CreateSmsMessage from "../definitions/CreateSmsMessage";
import GetMessageInfoResponse from "../definitions/GetMessageInfoResponse";
import PathSegment from "../PathSegment";

export default class Sms extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("sms", id, prv, service);
    }

    /**
     *  <p>Creates and sends new SMS message. Sending SMS messages simultaneously to different recipients is limited up to 50 requests per minute; relevant for all client applications.</p><h4>App Permission</h4><p>SMS</p><h4>User Permission</h4><p>OutboundSMS</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [] value is invalid</td></tr><tr><td>400</td><td>CMN-406</td><td>Duplicate value for parameter to: +13476733173 found in request</td></tr><tr><td>400</td><td>MSG-243</td><td>Parameter [to] value [18882049692] is invalid [Phone number is blocked]</td></tr><tr><td>400</td><td>MSG-245</td><td>Parameter [from] value [88121002330] is invalid [Cannot find the phone number which belongs to user]</td></tr><tr><td>400</td><td>MSG-246</td><td>Sending SMS from/to extension numbers is not available</td></tr><tr><td>400</td><td>MSG-247</td><td>Sending SMS to short numbers is not available</td></tr><tr><td>400</td><td>MSG-365</td><td>Parameters [country.id] and [country.isoCode] can not be specified simultaneously</td></tr><tr><td>400</td><td>MSG-376</td><td>Attachment size limit exceeded</td></tr><tr><td>400</td><td>MSG-379</td><td>Too many attachments</td></tr><tr><td>400</td><td>MSG-381</td><td>Exceeded maximum number of recipients for a Group MMS: [10]</td></tr><tr><td>403</td><td>BIL-103</td><td>Feature [MMS] is not available for current account</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [SMS] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [OutboundSMS] permission for requested resource.</td></tr><tr><td>403</td><td>MSG-240</td><td>International SMS is not available for account.</td></tr><tr><td>403</td><td>MSG-241</td><td>Cannot send SMS from Fax number</td></tr><tr><td>403</td><td>MSG-242</td><td>The requested feature is not available</td></tr><tr><td>403</td><td>MSG-314</td><td>Extension is of inappropriate type</td></tr><tr><td>403</td><td>MSG-367</td><td>"from" phone number does not support SMS</td></tr><tr><td>403</td><td>MSG-383</td><td>International MMS feature is not available</td></tr><tr><td>403</td><td>MSG-384</td><td>Account limits exceeded. Cannot send the message.</td></tr><tr><td>403</td><td>MSG-388</td><td>The destination is prohibited</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr><tr><td>415</td><td>MSG-348</td><td>Unsupported attachment media type, attachment [3]: [stuff.smil]</td></tr> </tbody></table>								
     */
    post(body: CreateSmsMessage): Promise<GetMessageInfoResponse> {
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
     *  <p>Creates and sends new SMS message. Sending SMS messages simultaneously to different recipients is limited up to 50 requests per minute; relevant for all client applications.</p><h4>App Permission</h4><p>SMS</p><h4>User Permission</h4><p>OutboundSMS</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [] value is invalid</td></tr><tr><td>400</td><td>CMN-406</td><td>Duplicate value for parameter to: +13476733173 found in request</td></tr><tr><td>400</td><td>MSG-243</td><td>Parameter [to] value [18882049692] is invalid [Phone number is blocked]</td></tr><tr><td>400</td><td>MSG-245</td><td>Parameter [from] value [88121002330] is invalid [Cannot find the phone number which belongs to user]</td></tr><tr><td>400</td><td>MSG-246</td><td>Sending SMS from/to extension numbers is not available</td></tr><tr><td>400</td><td>MSG-247</td><td>Sending SMS to short numbers is not available</td></tr><tr><td>400</td><td>MSG-365</td><td>Parameters [country.id] and [country.isoCode] can not be specified simultaneously</td></tr><tr><td>400</td><td>MSG-376</td><td>Attachment size limit exceeded</td></tr><tr><td>400</td><td>MSG-379</td><td>Too many attachments</td></tr><tr><td>400</td><td>MSG-381</td><td>Exceeded maximum number of recipients for a Group MMS: [10]</td></tr><tr><td>403</td><td>BIL-103</td><td>Feature [MMS] is not available for current account</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [SMS] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [OutboundSMS] permission for requested resource.</td></tr><tr><td>403</td><td>MSG-240</td><td>International SMS is not available for account.</td></tr><tr><td>403</td><td>MSG-241</td><td>Cannot send SMS from Fax number</td></tr><tr><td>403</td><td>MSG-242</td><td>The requested feature is not available</td></tr><tr><td>403</td><td>MSG-314</td><td>Extension is of inappropriate type</td></tr><tr><td>403</td><td>MSG-367</td><td>"from" phone number does not support SMS</td></tr><tr><td>403</td><td>MSG-383</td><td>International MMS feature is not available</td></tr><tr><td>403</td><td>MSG-384</td><td>Account limits exceeded. Cannot send the message.</td></tr><tr><td>403</td><td>MSG-388</td><td>The destination is prohibited</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr><tr><td>415</td><td>MSG-348</td><td>Unsupported attachment media type, attachment [3]: [stuff.smil]</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(body: CreateSmsMessage): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
