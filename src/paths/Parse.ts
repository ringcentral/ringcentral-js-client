// This is Generated Source.
import ParsePhoneNumberRequest from "../definitions/ParsePhoneNumberRequest";
import ParsePhoneNumberResponse from "../definitions/ParsePhoneNumberResponse";
import PathSegment from "../PathSegment";

export default class Parse extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("parse", id, prv, service);
    }

    /**
     *  <p>Returns one or more parsed and/or formatted phone numbers that are passed as a string.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [nationalAsPriority] value is invalid</td></tr> </tbody></table>								
     */
    post(body: ParsePhoneNumberRequest, query?: PostQuery): Promise<ParsePhoneNumberResponse> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Returns one or more parsed and/or formatted phone numbers that are passed as a string.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [nationalAsPriority] value is invalid</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(body: ParsePhoneNumberRequest, query?: PostQuery): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: query,
        });
    }
}

export interface PostQuery {

    /**
     * Internal identifier of a home country. The default value is ISO code (ISO 3166) of the user's home country or brand country, if the user is undefined
     */
    homeCountry?: string;

    /**
     * The default value is 'False'. If 'True', the numbers that are closer to the home country are given higher priority
     */
    nationalAsPriority?: boolean;
}
