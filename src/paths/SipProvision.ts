// This is Generated Source.
import CreateSipRegistrationRequest from "../definitions/CreateSipRegistrationRequest";
import CreateSipRegistrationResponse from "../definitions/CreateSipRegistrationResponse";
import PathSegment from "../PathSegment";

export default class SipProvision extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("sip-provision", id, prv, service);
    }

    /**
     *  <p>Creates SIP registration of a device/application (WebPhone, Mobile, softphone)</p><h4>App Permission</h4><p>VoipCalling</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [sipInfo.transport] value is invalid</td></tr><tr><td>400</td><td>SPR-114</td><td>Device id length [40] is greater than allowed [38]</td></tr><tr><td>400</td><td>SPR-118</td><td>Parameter [device.id]=@1qwbc)yppa! is not a number</td></tr><tr><td>400</td><td>SPR-129</td><td>Not allowed to register with incompatible protocol list [WS, TCP]</td></tr><tr><td>400</td><td>SPR-130</td><td>device is not allowed for WebRTC.</td></tr><tr><td>403</td><td>BIL-103</td><td>Feature [WebPhone] is not available for current account</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [VoipCalling] permission</td></tr><tr><td>403</td><td>CMN-402</td><td>Administrator permission required</td></tr><tr><td>403</td><td>SPR-112</td><td>Client edition is not compatible with current Brand</td></tr><tr><td>403</td><td>SPR-122</td><td>Application version is not set in "User-Agent" header or not parseable</td></tr> </tbody></table>								
     */
    post(body: CreateSipRegistrationRequest): Promise<CreateSipRegistrationResponse> {
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
     *  <p>Creates SIP registration of a device/application (WebPhone, Mobile, softphone)</p><h4>App Permission</h4><p>VoipCalling</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [sipInfo.transport] value is invalid</td></tr><tr><td>400</td><td>SPR-114</td><td>Device id length [40] is greater than allowed [38]</td></tr><tr><td>400</td><td>SPR-118</td><td>Parameter [device.id]=@1qwbc)yppa! is not a number</td></tr><tr><td>400</td><td>SPR-129</td><td>Not allowed to register with incompatible protocol list [WS, TCP]</td></tr><tr><td>400</td><td>SPR-130</td><td>device is not allowed for WebRTC.</td></tr><tr><td>403</td><td>BIL-103</td><td>Feature [WebPhone] is not available for current account</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [VoipCalling] permission</td></tr><tr><td>403</td><td>CMN-402</td><td>Administrator permission required</td></tr><tr><td>403</td><td>SPR-112</td><td>Client edition is not compatible with current Brand</td></tr><tr><td>403</td><td>SPR-122</td><td>Application version is not set in "User-Agent" header or not parseable</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(body: CreateSipRegistrationRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
