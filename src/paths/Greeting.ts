// This is Generated Source.
import CustomCompanyGreetingInfo from "../definitions/CustomCompanyGreetingInfo";
import CustomCompanyGreetingRequest from "../definitions/CustomCompanyGreetingRequest";
import DictionaryGreetingInfo from "../definitions/DictionaryGreetingInfo";
import DictionaryGreetingList from "../definitions/DictionaryGreetingList";
import PathSegment from "../PathSegment";

export default class Greeting extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("greeting", id, prv, service);
    }

    /**
     *  <p>Returns a list of predefined standard greetings. Custom greetings recorded by user are not returned in response to this request. See Get Extension Custom Greetings.</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [type] value is invalid</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<DictionaryGreetingList> {
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
     *  <p>Returns a list of predefined standard greetings. Custom greetings recorded by user are not returned in response to this request. See Get Extension Custom Greetings.</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [type] value is invalid</td></tr> </tbody></table>								
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

    /**
     *  <p>Returns a standard greeting by ID.</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [greetingId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<DictionaryGreetingInfo> {
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
     *  <p>Returns a standard greeting by ID.</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [greetingId] is not found</td></tr> </tbody></table>								
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
     *  <p>Creates a custom company greeting.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>ReadUserInfo</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>AWR-129</td><td>Invalid attachment media type</td></tr><tr><td>400</td><td>AWR-178</td><td>Greeting type [Voicemail] is not applicable to company rule</td></tr><tr><td>400</td><td>CMN-101</td><td>Parameter [type] value is invalid</td></tr><tr><td>400</td><td>CMN-102</td><td>Resource for parameter [answeringRule.id] is not found</td></tr> </tbody></table>								
     */
    post(body: CustomCompanyGreetingRequest): Promise<CustomCompanyGreetingInfo> {
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
     *  <p>Creates a custom company greeting.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>ReadUserInfo</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>AWR-129</td><td>Invalid attachment media type</td></tr><tr><td>400</td><td>AWR-178</td><td>Greeting type [Voicemail] is not applicable to company rule</td></tr><tr><td>400</td><td>CMN-101</td><td>Parameter [type] value is invalid</td></tr><tr><td>400</td><td>CMN-102</td><td>Resource for parameter [answeringRule.id] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(body: CustomCompanyGreetingRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}

export interface ListQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted.
     */
    page?: number;

    /**
     * Indicates the page size (number of items).
     */
    perPage?: number;

    /**
     * Type of a greeting, specifying the case when the greeting is played
     */
    type?: "Introductory" | "Announcement" | "ConnectingMessage" | "ConnectingAudio" | "Voicemail" | "Unavailable" | "HoldMusic" | "Company";

    /**
     * Usage type of a greeting, specifying if the greeting is applied for user extension or department extension
     */
    usageType?: "UserExtensionAnsweringRule" | "ExtensionAnsweringRule" | "DepartmentExtensionAnsweringRule" | "CompanyAnsweringRule" | "CompanyAfterHoursAnsweringRule";
}
