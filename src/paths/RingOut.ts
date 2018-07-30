// This is Generated Source.
import GetRingOutStatusResponse from "../definitions/GetRingOutStatusResponse";
import MakeRingOutRequest from "../definitions/MakeRingOutRequest";
import PathSegment from "../PathSegment";

export default class RingOut extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("ring-out", id, prv, service);
    }

    /**
     *  <p>Makes a 2-leg RingOut call.</p><h4>App Permission</h4><p>RingOut</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [phoneNumber] value is invalid</td></tr><tr><td>400</td><td>TEL-107</td><td>Caller ID: [+18609411729] is not allowed</td></tr><tr><td>400</td><td>TEL-108</td><td>phoneNumber specified in the from field is empty or invalid</td></tr><tr><td>400</td><td>TEL-109</td><td>phoneNumber specified in the to field is empty or invalid</td></tr><tr><td>403</td><td>BIL-103</td><td>Feature [RingOut] is not available for current account</td></tr><tr><td>403</td><td>CMN-112</td><td>Feature [RingOut] is not available for current extension type</td></tr><tr><td>403</td><td>CMN-113</td><td>Feature [DomesticCalls] is not available for current extension</td></tr><tr><td>403</td><td>RNG-102</td><td>Caller ID should be one of company direct numbers</td></tr><tr><td>403</td><td>TEL-101</td><td>phoneNumber specified in the to field: [17176704078] is in blocked list</td></tr><tr><td>403</td><td>TEL-102</td><td>phoneNumber specified in the from field: [17176704078] is in blocked list</td></tr><tr><td>403</td><td>TEL-107</td><td>Caller ID: [+12094441763] is not allowed</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [forwardingNumberId] is not found</td></tr> </tbody></table>								
     */
    post(body: MakeRingOutRequest): Promise<GetRingOutStatusResponse> {
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
     *  <p>Makes a 2-leg RingOut call.</p><h4>App Permission</h4><p>RingOut</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [phoneNumber] value is invalid</td></tr><tr><td>400</td><td>TEL-107</td><td>Caller ID: [+18609411729] is not allowed</td></tr><tr><td>400</td><td>TEL-108</td><td>phoneNumber specified in the from field is empty or invalid</td></tr><tr><td>400</td><td>TEL-109</td><td>phoneNumber specified in the to field is empty or invalid</td></tr><tr><td>403</td><td>BIL-103</td><td>Feature [RingOut] is not available for current account</td></tr><tr><td>403</td><td>CMN-112</td><td>Feature [RingOut] is not available for current extension type</td></tr><tr><td>403</td><td>CMN-113</td><td>Feature [DomesticCalls] is not available for current extension</td></tr><tr><td>403</td><td>RNG-102</td><td>Caller ID should be one of company direct numbers</td></tr><tr><td>403</td><td>TEL-101</td><td>phoneNumber specified in the to field: [17176704078] is in blocked list</td></tr><tr><td>403</td><td>TEL-102</td><td>phoneNumber specified in the from field: [17176704078] is in blocked list</td></tr><tr><td>403</td><td>TEL-107</td><td>Caller ID: [+12094441763] is not allowed</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [forwardingNumberId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(body: MakeRingOutRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  <p>Returns the status of a 2-leg RingOut call.</p><h4>App Permission</h4><p>RingOut</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>503</td><td>CMN-201</td><td>Service Temporary Unavailable</td></tr> </tbody></table>								
     */
    get(): Promise<GetRingOutStatusResponse> {
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
     *  <p>Returns the status of a 2-leg RingOut call.</p><h4>App Permission</h4><p>RingOut</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>503</td><td>CMN-201</td><td>Service Temporary Unavailable</td></tr> </tbody></table>								
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
     *  <p>Cancels a 2-leg RingOut call.</p><h4>App Permission</h4><p>RingOut</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [ringOutId] is not found</td></tr> </tbody></table>								
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
     *  <p>Cancels a 2-leg RingOut call.</p><h4>App Permission</h4><p>RingOut</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [ringOutId] is not found</td></tr> </tbody></table>								
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
