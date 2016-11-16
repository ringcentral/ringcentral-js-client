// This is Generated Source.
import PathSegment from "../PathSegment";
import ActiveCalls from "./ActiveCalls";
import AddressBookSync from "./AddressBookSync";
import AddressBook from "./AddressBook";
import AnsweringRule from "./AnsweringRule";
import AuthzProfile from "./AuthzProfile";
import BlockedNumber from "./BlockedNumber";
import BusinessHours from "./BusinessHours";
import CallLog from "./CallLog";
import CallLogSync from "./CallLogSync";
import CompanyPager from "./CompanyPager";
import Conferencing from "./Conferencing";
import Device from "./Device";
import Fax from "./Fax";
import ForwardingNumber from "./ForwardingNumber";
import Grant from "./Grant";
import Greeting from "./Greeting";
import Meeting from "./Meeting";
import MessageStore from "./MessageStore";
import MessageSync from "./MessageSync";
import PhoneNumber from "./PhoneNumber";
import Presence from "./Presence";
import ProfileImage from "./ProfileImage";
import Ringout from "./Ringout";
import Sms from "./Sms";
import ExtensionInfo from "../definitions/ExtensionInfo";
import PagingResult from "../PagingResult";
import ExtensionInfoRequestStatusInfo from "../definitions/ExtensionInfoRequestStatusInfo";
import ExtensionInfoRequestContactInfo from "../definitions/ExtensionInfoRequestContactInfo";
import ExtensionInfoRequestPasswordPin from "../definitions/ExtensionInfoRequestPasswordPin";
import ExtensionInfoRequestPartnerId from "../definitions/ExtensionInfoRequestPartnerId";
import ExtensionInfoRequestProvision from "../definitions/ExtensionInfoRequestProvision";

export default class Extension extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("extension", id || "~", prv, service);
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
    addressBookSync(id?: string) {
        return new AddressBookSync(this, id);
    }

    /**
     * 
     */
    addressBook(id?: string) {
        return new AddressBook(this, id);
    }

    /**
     * Internal identifier of an answering rule. The value can be standard digital ID or specific ID - either business-hours-rule or after-hours-rule
     */
    answeringRule(id?: string) {
        return new AnsweringRule(this, id);
    }

    /**
     * 
     */
    authzProfile(id?: string) {
        return new AuthzProfile(this, id);
    }

    /**
     * Internal identifier of a blocked number list entry
     */
    blockedNumber(id?: string) {
        return new BlockedNumber(this, id);
    }

    /**
     * 
     */
    businessHours(id?: string) {
        return new BusinessHours(this, id);
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
    companyPager(id?: string) {
        return new CompanyPager(this, id);
    }

    /**
     * 
     */
    conferencing(id?: string) {
        return new Conferencing(this, id);
    }

    /**
     * Internal identifier of a device
     */
    device(id?: string) {
        return new Device(this, id);
    }

    /**
     * 
     */
    fax(id?: string) {
        return new Fax(this, id);
    }

    /**
     * 
     */
    forwardingNumber(id?: string) {
        return new ForwardingNumber(this, id);
    }

    /**
     * 
     */
    grant(id?: string) {
        return new Grant(this, id);
    }

    /**
     * Internal identifier of a greeting
     */
    greeting(id?: string) {
        return new Greeting(this, id);
    }

    /**
     * Internal identifier of a meeting
     */
    meeting(id?: string) {
        return new Meeting(this, id);
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
     * Internal identifier of a phone number
     */
    phoneNumber(id?: string) {
        return new PhoneNumber(this, id);
    }

    /**
     * 
     */
    presence(id?: string) {
        return new Presence(this, id);
    }

    /**
     * Dimensions of a profile image which will be returned in response.
     */
    profileImage(id?: string) {
        return new ProfileImage(this, id);
    }

    /**
     * Internal identifier of a RingOut call
     */
    ringout(id?: string) {
        return new Ringout(this, id);
    }

    /**
     * 
     */
    sms(id?: string) {
        return new Sms(this, id);
    }

    /**
     *  Get Extension List
     */
    list(query?: ListQuery): Promise<PagingResult<ExtensionInfo>> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: query,
          url: this.getEndpoint(false),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Get Extension Info by ID
     */
    get(): Promise<ExtensionInfo> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Update Extension by ID
     */
    put(body: PutBody): Promise<ExtensionInfo> {
        return this.getService().send({
          body: body,
          method: "put",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }
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
    status?: "Enabled" | "Disabled" | "NotActivated" | "Unassigned";

    /**
     * Extension type. Multiple values are supported
     */
    type?: "User" | "FaxUser" | "VirtualUser" | "DigitalUser" | "Department" | "Announcement" | "Voicemail" | "SharedLinesGroup" | "PagingOnlyGroup" | "IvrMenu" | "ApplicationExtension" | "ParkLocation";
}

export type PutBody = ExtensionInfoRequestStatusInfo | ExtensionInfoRequestContactInfo | ExtensionInfoRequestPasswordPin | ExtensionInfoRequestPartnerId | ExtensionInfoRequestProvision;
