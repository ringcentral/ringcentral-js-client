// This is Generated Source.
import ExtensionCallerIdInfo from "../definitions/ExtensionCallerIdInfo";
import PathSegment from "../PathSegment";

export default class CallerId extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("caller-id", id, prv, service);
    }

    /**
     *  <p>Returns information on an outbound caller ID of an extension.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCallerIDSettings</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    get(): Promise<ExtensionCallerIdInfo> {
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
     *  <p>Returns information on an outbound caller ID of an extension.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCallerIDSettings</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Updates outbound caller ID information of an extension.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditCallerIDSettings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [byFeature.callerId.type] value is invalid</td></tr><tr><td>400</td><td>CMN-102</td><td>Resource for parameter [phoneInfo.id] is not found</td></tr><tr><td>403</td><td>CID-101</td><td>Feature [CommonPhone] is not available for current account.</td></tr><tr><td>403</td><td>CID-102</td><td>Contact center phone number cannot be set as caller ID: Contact Center is not available for current account.</td></tr><tr><td>403</td><td>CID-103</td><td>Conferencing phone number cannot be set as caller ID.</td></tr> </tbody></table>								
     */
    put(body: ExtensionCallerIdInfo): Promise<ExtensionCallerIdInfo> {
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
     *  <p>Updates outbound caller ID information of an extension.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditCallerIDSettings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [byFeature.callerId.type] value is invalid</td></tr><tr><td>400</td><td>CMN-102</td><td>Resource for parameter [phoneInfo.id] is not found</td></tr><tr><td>403</td><td>CID-101</td><td>Feature [CommonPhone] is not available for current account.</td></tr><tr><td>403</td><td>CID-102</td><td>Contact center phone number cannot be set as caller ID: Contact Center is not available for current account.</td></tr><tr><td>403</td><td>CID-103</td><td>Conferencing phone number cannot be set as caller ID.</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    putRaw(body: ExtensionCallerIdInfo): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}
