import GetAccountInfoResponse from "../definitions/GetAccountInfoResponse";
import PathSegment from "../PathSegment";
import Extension from "./Extension";
import CallLog from "./CallLog";
import CallLogSync from "./CallLogSync";
import ActiveCalls from "./ActiveCalls";
import Recording from "./Recording";
import Directory from "./Directory";
import Bot from "./Bot";
import Presence from "./Presence";
import BusinessHours from "./BusinessHours";
import Greeting from "./Greeting";
import AnsweringRule from "./AnsweringRule";
import IvrMenus from "./IvrMenus";
import IvrPrompts from "./IvrPrompts";
import BusinessAddress from "./BusinessAddress";
import ServiceInfo from "./ServiceInfo";
import PhoneNumber from "./PhoneNumber";
import Device from "./Device";
import Licenses from "./Licenses";
import Department from "./Department";
import PagingOnlyGroups from "./PagingOnlyGroups";
import ParkLocations from "./ParkLocations";
export default class Account extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     * Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
     */
    extension(id?: string): Extension;
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
     * Internal identifier of a recording (returned in Call Log)
     */
    recording(id?: string): Recording;
    /**
     *
     */
    directory(id?: string): Directory;
    /**
     *
     */
    bot(id?: string): Bot;
    /**
     *
     */
    presence(id?: string): Presence;
    /**
     *
     */
    businessHours(id?: string): BusinessHours;
    /**
     *
     */
    greeting(id?: string): Greeting;
    /**
     * Internal identifier of an answering rule. The value can be standard digital ID or specific ID - either business-hours-rule or after-hours-rule
     */
    answeringRule(id?: string): AnsweringRule;
    /**
     *
     */
    ivrMenus(id?: string): IvrMenus;
    /**
     *
     */
    ivrPrompts(id?: string): IvrPrompts;
    /**
     *
     */
    businessAddress(id?: string): BusinessAddress;
    /**
     *
     */
    serviceInfo(id?: string): ServiceInfo;
    /**
     *
     */
    phoneNumber(id?: string): PhoneNumber;
    /**
     *
     */
    device(id?: string): Device;
    /**
     * Internal identifier of a license
     */
    licenses(id?: string): Licenses;
    /**
     * Internal identifier of a Department extension (same as extensionId but only the ID of a department extension is valid)
     */
    department(id?: string): Department;
    /**
     *
     */
    pagingOnlyGroups(id?: string): PagingOnlyGroups;
    /**
     *
     */
    parkLocations(id?: string): ParkLocations;
    /**
     *  <p style='font-style:italic;'>Since 1.0.0</p><p>Returns basic information about a particular RingCentral customer account.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     */
    get(): Promise<GetAccountInfoResponse>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.0</p><p>Returns basic information about a particular RingCentral customer account.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    getRaw(): Promise<any>;
}
