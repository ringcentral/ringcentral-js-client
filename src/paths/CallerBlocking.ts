// This is Generated Source.
import CallerBlockingSettings from "../definitions/CallerBlockingSettings";
import CallerBlockingSettingsUpdate from "../definitions/CallerBlockingSettingsUpdate";
import PathSegment from "../PathSegment";
import PhoneNumbers from "./PhoneNumbers";

export default class CallerBlocking extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("caller-blocking", id, prv, service);
    }

    /**
     * 
     */
    phoneNumbers(id?: string) {
        return new PhoneNumbers(this, id);
    }

    /**
     *  <p>Returns the current call blocking settings of a user.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadBlockedNumbers</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    get(): Promise<CallerBlockingSettings> {
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
     *  <p>Returns the current call blocking settings of a user.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadBlockedNumbers</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Updates the current call blocking settings of a user.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditBlockedNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [greetings] value is invalid</td></tr> </tbody></table>								
     */
    put(body: CallerBlockingSettingsUpdate): Promise<CallerBlockingSettings> {
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
     *  <p>Updates the current call blocking settings of a user.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditBlockedNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [greetings] value is invalid</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    putRaw(body: CallerBlockingSettingsUpdate): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}
