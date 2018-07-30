// This is Generated Source.
import ContactList from "../definitions/ContactList";
import PersonalContactResource from "../definitions/PersonalContactResource";
import PathSegment from "../PathSegment";

export default class Contact extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("contact", id, prv, service);
    }

    /**
     *  <p>Returns user personal contacts.</p><h4>App Permission</h4><p>ReadContacts</p><h4>User Permission</h4><p>ReadPersonalContacts</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [perPage] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadContacts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<ContactList> {
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
     *  <p>Returns user personal contacts.</p><h4>App Permission</h4><p>ReadContacts</p><h4>User Permission</h4><p>ReadPersonalContacts</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [perPage] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadContacts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
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
     *  <p>Creates personal user contact.</p><h4>App Permission</h4><p>Contacts</p><h4>User Permission</h4><p>EditPersonalContacts</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [notes] value is invalid</td></tr><tr><td>400</td><td>PAB-102</td><td>Parameter [assistantPhone] is invalid. Failed to parse phone number.</td></tr><tr><td>400</td><td>PAB-103</td><td>Parameter [assistantPhone] is invalid. The phone number is too long.</td></tr><tr><td>400</td><td>PAB-104</td><td>Parameter [assistantPhone] is invalid. The phone numbers starting with the asterisk are not supported.</td></tr><tr><td>400</td><td>PAB-105</td><td>Parameter [assistantPhone] is invalid. The extensions longer than 10 digits are not supported.</td></tr><tr><td>400</td><td>PAB-106</td><td>Parameter [assistantPhone] is invalid. The DTMF sequences longer than 64 digits are not supported.</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [Contacts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditPersonalContacts] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    post(body: PersonalContactResource, query?: PostQuery): Promise<PersonalContactResource> {
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
     *  <p>Creates personal user contact.</p><h4>App Permission</h4><p>Contacts</p><h4>User Permission</h4><p>EditPersonalContacts</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [notes] value is invalid</td></tr><tr><td>400</td><td>PAB-102</td><td>Parameter [assistantPhone] is invalid. Failed to parse phone number.</td></tr><tr><td>400</td><td>PAB-103</td><td>Parameter [assistantPhone] is invalid. The phone number is too long.</td></tr><tr><td>400</td><td>PAB-104</td><td>Parameter [assistantPhone] is invalid. The phone numbers starting with the asterisk are not supported.</td></tr><tr><td>400</td><td>PAB-105</td><td>Parameter [assistantPhone] is invalid. The extensions longer than 10 digits are not supported.</td></tr><tr><td>400</td><td>PAB-106</td><td>Parameter [assistantPhone] is invalid. The DTMF sequences longer than 64 digits are not supported.</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [Contacts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditPersonalContacts] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(body: PersonalContactResource, query?: PostQuery): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: query,
        });
    }

    /**
     *  <p>Returns contact(s) by ID(s). Batch request is supported.</p><h4>App Permission</h4><p>ReadContacts</p><h4>User Permission</h4><p>ReadPersonalContacts</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadContacts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<PersonalContactResource> {
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
     *  <p>Returns contact(s) by ID(s). Batch request is supported.</p><h4>App Permission</h4><p>ReadContacts</p><h4>User Permission</h4><p>ReadPersonalContacts</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadContacts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
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
     *  <p>Updates personal contact information by contact ID(s). Batch request is supported</p><h4>App Permission</h4><p>Contacts</p><h4>User Permission</h4><p>EditPersonalContacts</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [notes] value is invalid</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [Contacts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditPersonalContacts] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    put(body: PersonalContactResource, query?: PutQuery): Promise<PersonalContactResource> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Updates personal contact information by contact ID(s). Batch request is supported</p><h4>App Permission</h4><p>Contacts</p><h4>User Permission</h4><p>EditPersonalContacts</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [notes] value is invalid</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [Contacts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditPersonalContacts] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    putRaw(body: PersonalContactResource, query?: PutQuery): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: query,
        });
    }

    /**
     *  <p>Deletes contact(s) by ID(s). Batch request is supported.</p><h4>App Permission</h4><p>Contacts</p><h4>User Permission</h4><p>EditPersonalContacts</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [Contacts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditPersonalContacts] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
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
     *  <p>Deletes contact(s) by ID(s). Batch request is supported.</p><h4>App Permission</h4><p>Contacts</p><h4>User Permission</h4><p>EditPersonalContacts</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [Contacts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditPersonalContacts] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
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

export interface ListQuery {

    /**
     * If specified, only contacts whose First name or Last name start with the mentioned substring are returned. Case-insensitive
     */
    startsWith?: string;

    /**
     * Sorts results by the specified property
     */
    sortBy?: ("FirstName" | "LastName" | "Company")[];

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;

    /**
     * 
     */
    phoneNumber?: string[];
}

export interface PostQuery {

    /**
     * A country code value complying with the [ISO 3166-1 alpha-2](https://ru.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. The default value is home country of the current extension
     */
    dialingPlan?: string;
}

export interface PutQuery {

    /**
     * A country code value complying with the [ISO 3166-1 alpha-2](https://ru.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. The default value is home country of the current extension
     */
    dialingPlan?: string;
}
