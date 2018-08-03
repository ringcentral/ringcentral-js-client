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
import BlockedNumber from "./BlockedNumber";
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
     * Deprecated
     */
    blockedNumber(id?: string) {
        return new BlockedNumber(this, id);
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
     *  Returns basic information about a particular extension of an account.
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
     *  Returns basic information about a particular extension of an account.
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
     *  Updates user settings.
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
     *  Updates user settings.
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
     *  Deletes extension(s) by ID(s).
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
     *  Deletes extension(s) by ID(s).
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
     *  Returns the list of extensions created for a particular account. All types of extensions are included in this list.
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
     *  Returns the list of extensions created for a particular account. All types of extensions are included in this list.
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
     *  Creates an extension.
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
     *  Creates an extension.
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
