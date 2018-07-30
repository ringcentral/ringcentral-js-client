// This is Generated Source.
import ExtensionCreationRequest from "../definitions/ExtensionCreationRequest";
import ExtensionCreationResponse from "../definitions/ExtensionCreationResponse";
import ExtensionUpdateRequest from "../definitions/ExtensionUpdateRequest";
import GetExtensionInfoResponse from "../definitions/GetExtensionInfoResponse";
import GetExtensionListResponse from "../definitions/GetExtensionListResponse";
import PathSegment from "../PathSegment";
import CallLog from "./CallLog";
import CallLogSync from "./CallLogSync";
import ActiveCalls from "./ActiveCalls";
import Sms from "./Sms";
import CompanyPager from "./CompanyPager";
import Fax from "./Fax";
import MessageStore from "./MessageStore";
import MessageSync from "./MessageSync";
import Voicemail from "./Voicemail";
import RingOut from "./RingOut";
import AddressBook from "./AddressBook";
import AddressBookSync from "./AddressBookSync";
import Favorite from "./Favorite";
import Presence from "./Presence";
import Meeting from "./Meeting";
import AuthzProfile from "./AuthzProfile";
import BusinessHours from "./BusinessHours";
import CallerBlocking from "./CallerBlocking";
import ForwardingNumber from "./ForwardingNumber";
import AnsweringRule from "./AnsweringRule";
import Greeting from "./Greeting";
import PhoneNumber from "./PhoneNumber";
import CallerId from "./CallerId";
import Grant from "./Grant";
import NotificationSettings from "./NotificationSettings";
import ProfileImage from "./ProfileImage";
import Conferencing from "./Conferencing";
import Device from "./Device";

export default class Extension extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("extension", id || "~", prv, service);
    }

    /**
     * Internal identifier of a call log record
     */
    callLog(id?: string) {
        return new CallLog(this, id);
    }

    /**
     * 
     */
    callLogSync(id?: string) {
        return new CallLogSync(this, id);
    }

    /**
     * 
     */
    activeCalls(id?: string) {
        return new ActiveCalls(this, id);
    }

    /**
     * 
     */
    sms(id?: string) {
        return new Sms(this, id);
    }

    /**
     * 
     */
    companyPager(id?: string) {
        return new CompanyPager(this, id);
    }

    /**
     * 
     */
    fax(id?: string) {
        return new Fax(this, id);
    }

    /**
     * Internal identifier of a message
     */
    messageStore(id?: string) {
        return new MessageStore(this, id);
    }

    /**
     * 
     */
    messageSync(id?: string) {
        return new MessageSync(this, id);
    }

    /**
     * 
     */
    voicemail(id?: string) {
        return new Voicemail(this, id);
    }

    /**
     * Internal identifier of a RingOut call
     */
    ringOut(id?: string) {
        return new RingOut(this, id);
    }

    /**
     * 
     */
    addressBook(id?: string) {
        return new AddressBook(this, id);
    }

    /**
     * 
     */
    addressBookSync(id?: string) {
        return new AddressBookSync(this, id);
    }

    /**
     * 
     */
    favorite(id?: string) {
        return new Favorite(this, id);
    }

    /**
     * 
     */
    presence(id?: string) {
        return new Presence(this, id);
    }

    /**
     * Internal identifier of a RingCentral meeting
     */
    meeting(id?: string) {
        return new Meeting(this, id);
    }

    /**
     * 
     */
    authzProfile(id?: string) {
        return new AuthzProfile(this, id);
    }

    /**
     * 
     */
    businessHours(id?: string) {
        return new BusinessHours(this, id);
    }

    /**
     * 
     */
    callerBlocking(id?: string) {
        return new CallerBlocking(this, id);
    }

    /**
     * Internal identifier of a forwarding number
     */
    forwardingNumber(id?: string) {
        return new ForwardingNumber(this, id);
    }

    /**
     * Internal identifier of an answering rule
     */
    answeringRule(id?: string) {
        return new AnsweringRule(this, id);
    }

    /**
     * 
     */
    greeting(id?: string) {
        return new Greeting(this, id);
    }

    /**
     * Internal identifier of a phone number
     */
    phoneNumber(id?: string) {
        return new PhoneNumber(this, id);
    }

    /**
     * 
     */
    callerId(id?: string) {
        return new CallerId(this, id);
    }

    /**
     * 
     */
    grant(id?: string) {
        return new Grant(this, id);
    }

    /**
     * 
     */
    notificationSettings(id?: string) {
        return new NotificationSettings(this, id);
    }

    /**
     * Dimensions of a profile image which will be returned in response. If this path parameter is not specified in request URI then
     */
    profileImage(id?: string) {
        return new ProfileImage(this, id);
    }

    /**
     * 
     */
    conferencing(id?: string) {
        return new Conferencing(this, id);
    }

    /**
     * 
     */
    device(id?: string) {
        return new Device(this, id);
    }

    /**
     *  <p>Returns basic information about a particular extension of an account.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-129</td><td>Access token corrupted</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr><tr><td>429</td><td>CMN-301</td><td>Request rate exceeded</td></tr> </tbody></table>								
     */
    get(): Promise<GetExtensionInfoResponse> {
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
     *  <p>Returns basic information about a particular extension of an account.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-129</td><td>Access token corrupted</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr><tr><td>429</td><td>CMN-301</td><td>Request rate exceeded</td></tr> </tbody></table>								
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
     *  <p>Updates user settings.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserInfo OR EditUserCredentials</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [regionalSettings.timeFormat] value is invalid</td></tr><tr><td>400</td><td>CMN-102</td><td>Resource for parameter [regionalSettings.formattingLocale.id] is not found</td></tr><tr><td>400</td><td>EXT-102</td><td>Parameter [contact.businessPhone] cannot be a RingCentral phone number</td></tr><tr><td>400</td><td>EXT-103</td><td>Parameter [contact.businessPhone] should be a valid phone number</td></tr><tr><td>400</td><td>EXT-214</td><td>Extension number [0] is already being used by Operator</td></tr><tr><td>400</td><td>EXT-215</td><td>Extension number [012] cannot start from [0]</td></tr><tr><td>400</td><td>EXT-216</td><td>Extension number [9] conflicts with company directory extension</td></tr><tr><td>400</td><td>EXT-217</td><td>Extension number [112] is reserved on brand</td></tr><tr><td>400</td><td>EXT-218</td><td>Extension number [101] is used by another extension on account</td></tr><tr><td>400</td><td>EXT-219</td><td>Extension number [123456] is out of range allowed on account</td></tr><tr><td>400</td><td>EXT-224</td><td>Changing extension type is prohibited</td></tr><tr><td>400</td><td>EXT-225</td><td>All language settings should be specified: UI, greeting and formatting locale</td></tr><tr><td>400</td><td>EXT-229</td><td>Email must be used as login for current account</td></tr><tr><td>400</td><td>EXT-231</td><td>Call queue settings can be set for "Department" extension type only</td></tr><tr><td>400</td><td>EXT-361</td><td>Extension number [103] doesn`t satisfy to the rules to extension numbers of Site with code [35].</td></tr><tr><td>400</td><td>PRT-101</td><td>Cannot find [partnerId] [376e6b23-ece4-4dfd-9b58-19a8bc3577bc] for the account</td></tr><tr><td>400</td><td>PRT-102</td><td>[partnerId] [13d106c7-c0e4-499f-b860-ed7cd499d153] already exists</td></tr><tr><td>400</td><td>PWD-001</td><td>Password must contain at least one letter</td></tr><tr><td>400</td><td>PWD-002</td><td>Password must contain at least one number</td></tr><tr><td>400</td><td>PWD-003</td><td>Password must contain at least one upper case letter or special character</td></tr><tr><td>400</td><td>PWD-004</td><td>Password must not contain more than 3 consecutive ascending or descending characters</td></tr><tr><td>400</td><td>PWD-005</td><td>Password too short: at least 8 characters required</td></tr><tr><td>400</td><td>PWD-006</td><td>Password too long: up to 32 characters supported</td></tr><tr><td>400</td><td>PWD-007</td><td>Password must not contain more than 2 repeating characters</td></tr><tr><td>400</td><td>PWD-014</td><td>Password must not contain illegal characters</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>403</td><td>EXT-222</td><td>Changing extension status is prohibited for system extension</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr><tr><td>409</td><td>EXT-226</td><td>Extension e-mail already exists on account</td></tr><tr><td>409</td><td>EXT-227</td><td>Login [john.doe@example.com] is already taken</td></tr><tr><td>501</td><td>CMN-202</td><td>Operation is not available</td></tr> </tbody></table>								
     */
    put(body: ExtensionUpdateRequest): Promise<GetExtensionInfoResponse> {
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
     *  <p>Updates user settings.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserInfo OR EditUserCredentials</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [regionalSettings.timeFormat] value is invalid</td></tr><tr><td>400</td><td>CMN-102</td><td>Resource for parameter [regionalSettings.formattingLocale.id] is not found</td></tr><tr><td>400</td><td>EXT-102</td><td>Parameter [contact.businessPhone] cannot be a RingCentral phone number</td></tr><tr><td>400</td><td>EXT-103</td><td>Parameter [contact.businessPhone] should be a valid phone number</td></tr><tr><td>400</td><td>EXT-214</td><td>Extension number [0] is already being used by Operator</td></tr><tr><td>400</td><td>EXT-215</td><td>Extension number [012] cannot start from [0]</td></tr><tr><td>400</td><td>EXT-216</td><td>Extension number [9] conflicts with company directory extension</td></tr><tr><td>400</td><td>EXT-217</td><td>Extension number [112] is reserved on brand</td></tr><tr><td>400</td><td>EXT-218</td><td>Extension number [101] is used by another extension on account</td></tr><tr><td>400</td><td>EXT-219</td><td>Extension number [123456] is out of range allowed on account</td></tr><tr><td>400</td><td>EXT-224</td><td>Changing extension type is prohibited</td></tr><tr><td>400</td><td>EXT-225</td><td>All language settings should be specified: UI, greeting and formatting locale</td></tr><tr><td>400</td><td>EXT-229</td><td>Email must be used as login for current account</td></tr><tr><td>400</td><td>EXT-231</td><td>Call queue settings can be set for "Department" extension type only</td></tr><tr><td>400</td><td>EXT-361</td><td>Extension number [103] doesn`t satisfy to the rules to extension numbers of Site with code [35].</td></tr><tr><td>400</td><td>PRT-101</td><td>Cannot find [partnerId] [376e6b23-ece4-4dfd-9b58-19a8bc3577bc] for the account</td></tr><tr><td>400</td><td>PRT-102</td><td>[partnerId] [13d106c7-c0e4-499f-b860-ed7cd499d153] already exists</td></tr><tr><td>400</td><td>PWD-001</td><td>Password must contain at least one letter</td></tr><tr><td>400</td><td>PWD-002</td><td>Password must contain at least one number</td></tr><tr><td>400</td><td>PWD-003</td><td>Password must contain at least one upper case letter or special character</td></tr><tr><td>400</td><td>PWD-004</td><td>Password must not contain more than 3 consecutive ascending or descending characters</td></tr><tr><td>400</td><td>PWD-005</td><td>Password too short: at least 8 characters required</td></tr><tr><td>400</td><td>PWD-006</td><td>Password too long: up to 32 characters supported</td></tr><tr><td>400</td><td>PWD-007</td><td>Password must not contain more than 2 repeating characters</td></tr><tr><td>400</td><td>PWD-014</td><td>Password must not contain illegal characters</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>403</td><td>EXT-222</td><td>Changing extension status is prohibited for system extension</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr><tr><td>409</td><td>EXT-226</td><td>Extension e-mail already exists on account</td></tr><tr><td>409</td><td>EXT-227</td><td>Login [john.doe@example.com] is already taken</td></tr><tr><td>501</td><td>CMN-202</td><td>Operation is not available</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    putRaw(body: ExtensionUpdateRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  <p>Deletes extension(s) by ID(s).</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>AddRemoveUsers</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>EXT-340</td><td>Could not delete extension with saving lines: limit reached</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [BotUninstall] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
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
     *  <p>Deletes extension(s) by ID(s).</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>AddRemoveUsers</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>EXT-340</td><td>Could not delete extension with saving lines: limit reached</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [BotUninstall] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
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

    /**
     *  <p>Returns the list of extensions created for a particular account. All types of extensions are included in this list.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [status] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr><tr><td>429</td><td>CMN-301</td><td>Request rate exceeded</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<GetExtensionListResponse> {
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
     *  <p>Returns the list of extensions created for a particular account. All types of extensions are included in this list.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [status] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr><tr><td>429</td><td>CMN-301</td><td>Request rate exceeded</td></tr> </tbody></table>								
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
     *  <p>Creates an extension.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>AddRemoveUsers</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [partnerId] value is invalid</td></tr><tr><td>400</td><td>CMN-102</td><td>Resource for parameter [regionalSettings.homeCountry.id] is not found</td></tr><tr><td>400</td><td>EXT-102</td><td>Parameter [contact.businessPhone] cannot be a RingCentral phone number</td></tr><tr><td>400</td><td>EXT-103</td><td>Parameter [contact.businessPhone] should be a valid phone number</td></tr><tr><td>400</td><td>EXT-214</td><td>Extension number [0] is already being used by Operator</td></tr><tr><td>400</td><td>EXT-215</td><td>Extension number [012] cannot start from [0]</td></tr><tr><td>400</td><td>EXT-216</td><td>Extension number [9] conflicts with company directory extension</td></tr><tr><td>400</td><td>EXT-217</td><td>Extension number [911] is reserved on brand</td></tr><tr><td>400</td><td>EXT-218</td><td>Extension number [234] is used by another extension on account</td></tr><tr><td>400</td><td>EXT-219</td><td>Extension number [111111] is out of range allowed on account</td></tr><tr><td>400</td><td>EXT-229</td><td>Email must be used as login for current account</td></tr><tr><td>400</td><td>EXT-351</td><td>Invalid user type [User] for current account service plan.</td></tr><tr><td>400</td><td>EXT-352</td><td>[Limited] extension type is not available for current account.</td></tr><tr><td>400</td><td>EXT-354</td><td>[PagingOnly] is not available for current account</td></tr><tr><td>400</td><td>EXT-355</td><td>Maximum amount of [User] extensions reached.</td></tr><tr><td>400</td><td>EXT-356</td><td>[lastName] cannot be specified for non-user extension.</td></tr><tr><td>400</td><td>PRT-101</td><td>Cannot find [partnerId] [35835632867329103] for the account</td></tr><tr><td>400</td><td>PRT-102</td><td>[partnerId] [1b058d47-ef3f-4bbb-9488-4997a34dea88] already exists</td></tr><tr><td>400</td><td>PWD-001</td><td>Password must contain at least one letter</td></tr><tr><td>400</td><td>PWD-002</td><td>Password must contain at least one number</td></tr><tr><td>400</td><td>PWD-003</td><td>Password must contain at least one upper case letter or special character</td></tr><tr><td>400</td><td>PWD-004</td><td>Password must not contain more than 3 consecutive ascending or descending characters</td></tr><tr><td>400</td><td>PWD-005</td><td>Password too short: at least 8 characters required</td></tr><tr><td>400</td><td>PWD-006</td><td>Password too long: up to 32 characters supported</td></tr><tr><td>400</td><td>PWD-007</td><td>Password must not contain more than 2 repeating characters</td></tr><tr><td>400</td><td>PWD-014</td><td>Password must not contain illegal characters</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [AddRemoveUsers] permission for requested resource.</td></tr><tr><td>403</td><td>EXT-250</td><td>There are no extension numbers available</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr><tr><td>409</td><td>EXT-226</td><td>Extension e-mail already exists on account</td></tr><tr><td>409</td><td>EXT-227</td><td>Login [john.doe@example.com] is already taken</td></tr><tr><td>501</td><td>CMN-202</td><td>Operation is not available</td></tr> </tbody></table>								
     */
    post(body: ExtensionCreationRequest): Promise<ExtensionCreationResponse> {
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
     *  <p>Creates an extension.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>AddRemoveUsers</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [partnerId] value is invalid</td></tr><tr><td>400</td><td>CMN-102</td><td>Resource for parameter [regionalSettings.homeCountry.id] is not found</td></tr><tr><td>400</td><td>EXT-102</td><td>Parameter [contact.businessPhone] cannot be a RingCentral phone number</td></tr><tr><td>400</td><td>EXT-103</td><td>Parameter [contact.businessPhone] should be a valid phone number</td></tr><tr><td>400</td><td>EXT-214</td><td>Extension number [0] is already being used by Operator</td></tr><tr><td>400</td><td>EXT-215</td><td>Extension number [012] cannot start from [0]</td></tr><tr><td>400</td><td>EXT-216</td><td>Extension number [9] conflicts with company directory extension</td></tr><tr><td>400</td><td>EXT-217</td><td>Extension number [911] is reserved on brand</td></tr><tr><td>400</td><td>EXT-218</td><td>Extension number [234] is used by another extension on account</td></tr><tr><td>400</td><td>EXT-219</td><td>Extension number [111111] is out of range allowed on account</td></tr><tr><td>400</td><td>EXT-229</td><td>Email must be used as login for current account</td></tr><tr><td>400</td><td>EXT-351</td><td>Invalid user type [User] for current account service plan.</td></tr><tr><td>400</td><td>EXT-352</td><td>[Limited] extension type is not available for current account.</td></tr><tr><td>400</td><td>EXT-354</td><td>[PagingOnly] is not available for current account</td></tr><tr><td>400</td><td>EXT-355</td><td>Maximum amount of [User] extensions reached.</td></tr><tr><td>400</td><td>EXT-356</td><td>[lastName] cannot be specified for non-user extension.</td></tr><tr><td>400</td><td>PRT-101</td><td>Cannot find [partnerId] [35835632867329103] for the account</td></tr><tr><td>400</td><td>PRT-102</td><td>[partnerId] [1b058d47-ef3f-4bbb-9488-4997a34dea88] already exists</td></tr><tr><td>400</td><td>PWD-001</td><td>Password must contain at least one letter</td></tr><tr><td>400</td><td>PWD-002</td><td>Password must contain at least one number</td></tr><tr><td>400</td><td>PWD-003</td><td>Password must contain at least one upper case letter or special character</td></tr><tr><td>400</td><td>PWD-004</td><td>Password must not contain more than 3 consecutive ascending or descending characters</td></tr><tr><td>400</td><td>PWD-005</td><td>Password too short: at least 8 characters required</td></tr><tr><td>400</td><td>PWD-006</td><td>Password too long: up to 32 characters supported</td></tr><tr><td>400</td><td>PWD-007</td><td>Password must not contain more than 2 repeating characters</td></tr><tr><td>400</td><td>PWD-014</td><td>Password must not contain illegal characters</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [AddRemoveUsers] permission for requested resource.</td></tr><tr><td>403</td><td>EXT-250</td><td>There are no extension numbers available</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr><tr><td>409</td><td>EXT-226</td><td>Extension e-mail already exists on account</td></tr><tr><td>409</td><td>EXT-227</td><td>Login [john.doe@example.com] is already taken</td></tr><tr><td>501</td><td>CMN-202</td><td>Operation is not available</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(body: ExtensionCreationRequest): Promise<any> {
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
     * Indicates the page number to retrieve. Only positive number values are allowed
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;

    /**
     * Extension current state. Multiple values are supported. If 'Unassigned' is specified, then extensions without extensionNumber are returned. If not specified, then all extensions are returned.
     */
    status?: ("Enabled" | "Disabled" | "NotActivated" | "Unassigned")[];

    /**
     * Extension type. Multiple values are supported
     */
    type?: ("User" | "FaxUser" | "VirtualUser" | "DigitalUser" | "Department" | "Announcement" | "Voicemail" | "SharedLinesGroup" | "PagingOnly" | "IvrMenu" | "ApplicationExtension" | "ParkLocation" | "Limited" | "Bot")[];
}
