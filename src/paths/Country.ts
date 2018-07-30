// This is Generated Source.
import GetCountryInfoDictionaryResponse from "../definitions/GetCountryInfoDictionaryResponse";
import GetCountryListResponse from "../definitions/GetCountryListResponse";
import PathSegment from "../PathSegment";

export default class Country extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("country", id, prv, service);
    }

    /**
     *  <p>Returns all the countries available for calling.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [perPage] value is invalid</td></tr><tr><td>401</td><td>AGW-401</td><td>Authorization header is not specified</td></tr><tr><td>401</td><td>OAU-129</td><td>Access token corrupted</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<GetCountryListResponse> {
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
     *  <p>Returns all the countries available for calling.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [perPage] value is invalid</td></tr><tr><td>401</td><td>AGW-401</td><td>Authorization header is not specified</td></tr><tr><td>401</td><td>OAU-129</td><td>Access token corrupted</td></tr> </tbody></table>								
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
     *  <p>Returns the information on a specific country.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-122</td><td>Method is brand specific</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [countryId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<GetCountryInfoDictionaryResponse> {
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
     *  <p>Returns the information on a specific country.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-122</td><td>Method is brand specific</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [countryId] is not found</td></tr> </tbody></table>								
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
     * Specifies whether login with the phone numbers of this country is enabled or not
     */
    loginAllowed?: boolean;

    /**
     * Indicates whether signup/billing is allowed for a country. If not specified all countries are returned (according to other filters specified if any)
     */
    signupAllowed?: boolean;

    /**
     * Specifies if RingCentral sells phone numbers of this country
     */
    numberSelling?: boolean;

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;

    /**
     * Specifies if free phone line for softphone is available for a country or not
     */
    freeSoftphoneLine?: boolean;
}
