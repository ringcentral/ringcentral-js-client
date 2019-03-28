import ExtensionCreationRequest from "../definitions/ExtensionCreationRequest";
import ExtensionInfo from "../definitions/ExtensionInfo";
import ExtensionUpdateRequest from "../definitions/ExtensionUpdateRequest";
import GetExtensionInfoResponse from "../definitions/GetExtensionInfoResponse";
import GetExtensionListResponse from "../definitions/GetExtensionListResponse";
import PathSegment from "../PathSegment";
import CallLog from "./CallLog";
import CallLogSync from "./CallLogSync";
import ActiveCalls from "./ActiveCalls";
import PhoneNumber from "./PhoneNumber";
import Sms from "./Sms";
import CompanyPager from "./CompanyPager";
import Fax from "./Fax";
import MessageStore from "./MessageStore";
import MessageSync from "./MessageSync";
import RingOut from "./RingOut";
import AddressBook from "./AddressBook";
import AddressBookSync from "./AddressBookSync";
import Favorite from "./Favorite";
import Presence from "./Presence";
import Meeting from "./Meeting";
import AuthzProfile from "./AuthzProfile";
import ForwardingNumber from "./ForwardingNumber";
import BlockedNumber from "./BlockedNumber";
import BusinessHours from "./BusinessHours";
import AnsweringRule from "./AnsweringRule";
import Greeting from "./Greeting";
import CallerId from "./CallerId";
import Grant from "./Grant";
import NotificationSettings from "./NotificationSettings";
import ProfileImage from "./ProfileImage";
import Conferencing from "./Conferencing";
import Device from "./Device";
export default class Extension extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     * Internal identifier of a call log record
     */
    callLog(id?: string): CallLog;
    /**
     *
     */
    callLogSync(id?: string): CallLogSync;
    /**
     *
     */
    activeCalls(id?: string): ActiveCalls;
    /**
     *
     */
    phoneNumber(id?: string): PhoneNumber;
    /**
     *
     */
    sms(id?: string): Sms;
    /**
     *
     */
    companyPager(id?: string): CompanyPager;
    /**
     *
     */
    fax(id?: string): Fax;
    /**
     * Internal identifier of a message
     */
    messageStore(id?: string): MessageStore;
    /**
     *
     */
    messageSync(id?: string): MessageSync;
    /**
     * Internal identifier of a RingOut call
     */
    ringOut(id?: string): RingOut;
    /**
     *
     */
    addressBook(id?: string): AddressBook;
    /**
     *
     */
    addressBookSync(id?: string): AddressBookSync;
    /**
     *
     */
    favorite(id?: string): Favorite;
    /**
     *
     */
    presence(id?: string): Presence;
    /**
     *
     */
    meeting(id?: string): Meeting;
    /**
     *
     */
    authzProfile(id?: string): AuthzProfile;
    /**
     * Internal identifier of a forwarding number
     */
    forwardingNumber(id?: string): ForwardingNumber;
    /**
     * Internal identifiers of a blocked number list entry
     */
    blockedNumber(id?: string): BlockedNumber;
    /**
     *
     */
    businessHours(id?: string): BusinessHours;
    /**
     * Internal identifier of an answering rule. The value can be standard digital ID or specific ID - either business-hours-rule or after-hours-rule
     */
    answeringRule(id?: string): AnsweringRule;
    /**
     *
     */
    greeting(id?: string): Greeting;
    /**
     *
     */
    callerId(id?: string): CallerId;
    /**
     *
     */
    grant(id?: string): Grant;
    /**
     *
     */
    notificationSettings(id?: string): NotificationSettings;
    /**
     * Dimensions of a profile image which will be returned in response. If this path parameter is not specified in request URI then
     */
    profileImage(id?: string): ProfileImage;
    /**
     *
     */
    conferencing(id?: string): Conferencing;
    /**
     *
     */
    device(id?: string): Device;
    /**
     *  <p style='font-style:italic;'>Since 1.0.0</p><p>Returns the list of extensions created for a particular account. All types of extensions are included in this list.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    list(query?: ListQuery): Promise<GetExtensionListResponse>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.0</p><p>Returns the list of extensions created for a particular account. All types of extensions are included in this list.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    listRaw(query?: ListQuery): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Creates an extension.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    post(body: ExtensionCreationRequest): Promise<ExtensionInfo>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Creates an extension.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    postRaw(body: ExtensionCreationRequest): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.0</p><p>Returns basic information about a particular extension of an account.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     */
    get(): Promise<GetExtensionInfoResponse>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.0</p><p>Returns basic information about a particular extension of an account.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    getRaw(): Promise<any>;
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     */
    put(body: ExtensionUpdateRequest): Promise<GetExtensionInfoResponse>;
    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    putRaw(body: ExtensionUpdateRequest): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Deletes extension(s) by ID(s).</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     */
    delete(): Promise<void>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Deletes extension(s) by ID(s).</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any>;
}
export interface ListQuery {
    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;
    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default.
     */
    perPage?: number;
    /**
     * Extension current state. Multiple values are supported. If 'Unassigned' is specified, then extensions without extensionNumber are returned. If not specified, then all extensions are returned
     */
    status?: ("Enabled" | "Disabled" | "NotActivated" | "Unassigned")[];
    /**
     * Extension type. Multiple values are supported
     */
    type?: ("User" | "FaxUser" | "VirtualUser" | "DigitalUser" | "Department" | "Announcement" | "Voicemail" | "SharedLinesGroup" | "PagingOnly" | "IvrMenu" | "ApplicationExtension" | "ParkLocation" | "Limited" | "Bot")[];
}
