// This is Generated Source.
import FavoriteCollection from "../definitions/FavoriteCollection";
import PathSegment from "../PathSegment";

export default class Favorite extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("favorite", id, prv, service);
    }

    /**
     *  <p>Returns the list of favorite contacts of the current extension. Favorite contacts include both company contacts (extensions) and personal contacts (address book records).</p><h4>App Permission</h4><p>ReadContacts</p><h4>User Permission</h4><p>ReadPersonalContacts</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadContacts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadPersonalContacts] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  <p>Returns the list of favorite contacts of the current extension. Favorite contacts include both company contacts (extensions) and personal contacts (address book records).</p><h4>App Permission</h4><p>ReadContacts</p><h4>User Permission</h4><p>ReadPersonalContacts</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadContacts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadPersonalContacts] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
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
     *  <p>Updates the list of favorite contacts of the current extension. Favorite contacts include both company contacts (extensions) and personal contacts (address book records).**Please note**: currently personal address book size is limited to 10 000 contacts.</p><h4>App Permission</h4><p>Contacts</p><h4>User Permission</h4><p>EditPersonalContacts</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [records.extensionId] value is invalid</td></tr><tr><td>400</td><td>FAV-100</td><td>Contact not found</td></tr><tr><td>400</td><td>FAV-101</td><td>More than one contact with the same [records.extensionId]</td></tr><tr><td>400</td><td>FAV-102</td><td>[records.extensionId] and [records.contactId] could not be specified for one contact simultaneously</td></tr><tr><td>400</td><td>FAV-103</td><td>More than one contact with the same [records.id]</td></tr><tr><td>400</td><td>FAV-104</td><td>Contact limit exceeded</td></tr><tr><td>400</td><td>FAV-105</td><td>Contact not found in federated directory</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [Contacts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    put(body: FavoriteCollection): Promise<void> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  <p>Updates the list of favorite contacts of the current extension. Favorite contacts include both company contacts (extensions) and personal contacts (address book records).**Please note**: currently personal address book size is limited to 10 000 contacts.</p><h4>App Permission</h4><p>Contacts</p><h4>User Permission</h4><p>EditPersonalContacts</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [records.extensionId] value is invalid</td></tr><tr><td>400</td><td>FAV-100</td><td>Contact not found</td></tr><tr><td>400</td><td>FAV-101</td><td>More than one contact with the same [records.extensionId]</td></tr><tr><td>400</td><td>FAV-102</td><td>[records.extensionId] and [records.contactId] could not be specified for one contact simultaneously</td></tr><tr><td>400</td><td>FAV-103</td><td>More than one contact with the same [records.id]</td></tr><tr><td>400</td><td>FAV-104</td><td>Contact limit exceeded</td></tr><tr><td>400</td><td>FAV-105</td><td>Contact not found in federated directory</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [Contacts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    putRaw(body: FavoriteCollection): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}
