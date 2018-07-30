// This is Generated Source.
import CompanyPhoneNumberInfo from "../definitions/CompanyPhoneNumberInfo";
import GetExtensionPhoneNumbersResponse from "../definitions/GetExtensionPhoneNumbersResponse";
import PathSegment from "../PathSegment";

export default class PhoneNumber extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("phone-number", id, prv, service);
    }

    /**
     *  <p>Returns the list of phone numbers that are used by a particular extension, and can be filtered by the phone number type. The returned list contains all numbers which are directly mapped to a given extension plus the features and also company-level numbers which may be used when performing different operations on behalf of this extension.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadUserPhoneNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [usageType] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<GetExtensionPhoneNumbersResponse> {
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
     *  <p>Returns the list of phone numbers that are used by a particular extension, and can be filtered by the phone number type. The returned list contains all numbers which are directly mapped to a given extension plus the features and also company-level numbers which may be used when performing different operations on behalf of this extension.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadUserPhoneNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [usageType] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
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
     *  <p>Returns the phone number(s) belonging to a certain account or extension by phoneNumberId(s). Batch request is supported.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyPhoneNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<CompanyPhoneNumberInfo> {
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
     *  <p>Returns the phone number(s) belonging to a certain account or extension by phoneNumberId(s). Batch request is supported.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyPhoneNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
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

export interface ListQuery {

    /**
     * Usage type of a phone number
     */
    usageType?: ("MainCompanyNumber" | "AdditionalCompanyNumber" | "CompanyNumber" | "DirectNumber" | "CompanyFaxNumber" | "ForwardedNumber")[];

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
