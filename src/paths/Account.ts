// This is Generated Source.
import GetAccountInfoResponse from "../definitions/GetAccountInfoResponse";
import PathSegment from "../PathSegment";
import Extension from "./Extension";
import CallLog from "./CallLog";
import ActiveCalls from "./ActiveCalls";
import Recording from "./Recording";
import Directory from "./Directory";
import Presence from "./Presence";
import BusinessHours from "./BusinessHours";
import AnsweringRule from "./AnsweringRule";
import Greeting from "./Greeting";
import IvrPrompts from "./IvrPrompts";
import IvrMenus from "./IvrMenus";
import CallRecording from "./CallRecording";
import BusinessAddress from "./BusinessAddress";
import ServiceInfo from "./ServiceInfo";
import PhoneNumber from "./PhoneNumber";
import Templates from "./Templates";
import Bots from "./Bots";
import Department from "./Department";
import PagingOnlyGroups from "./PagingOnlyGroups";
import Licenses from "./Licenses";
import CallQueues from "./CallQueues";
import CallMonitoringGroups from "./CallMonitoringGroups";
import Device from "./Device";

export default class Account extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("account", id || "~", prv, service);
    }

    /**
     * Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
     */
    extension(id?: string) {
        return new Extension(this, id);
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
    activeCalls(id?: string) {
        return new ActiveCalls(this, id);
    }

    /**
     * Internal identifier of a recording (returned in Call Log)
     */
    recording(id?: string) {
        return new Recording(this, id);
    }

    /**
     * 
     */
    directory(id?: string) {
        return new Directory(this, id);
    }

    /**
     * 
     */
    presence(id?: string) {
        return new Presence(this, id);
    }

    /**
     * 
     */
    businessHours(id?: string) {
        return new BusinessHours(this, id);
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
     * 
     */
    ivrPrompts(id?: string) {
        return new IvrPrompts(this, id);
    }

    /**
     * 
     */
    ivrMenus(id?: string) {
        return new IvrMenus(this, id);
    }

    /**
     * 
     */
    callRecording(id?: string) {
        return new CallRecording(this, id);
    }

    /**
     * 
     */
    businessAddress(id?: string) {
        return new BusinessAddress(this, id);
    }

    /**
     * 
     */
    serviceInfo(id?: string) {
        return new ServiceInfo(this, id);
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
    templates(id?: string) {
        return new Templates(this, id);
    }

    /**
     * 
     */
    bots(id?: string) {
        return new Bots(this, id);
    }

    /**
     * Internal identifier of a Department extension (same as extensionId but only the ID of a department extension is valid)
     */
    department(id?: string) {
        return new Department(this, id);
    }

    /**
     * 
     */
    pagingOnlyGroups(id?: string) {
        return new PagingOnlyGroups(this, id);
    }

    /**
     * Internal identifier of a license
     */
    licenses(id?: string) {
        return new Licenses(this, id);
    }

    /**
     * 
     */
    callQueues(id?: string) {
        return new CallQueues(this, id);
    }

    /**
     * 
     */
    callMonitoringGroups(id?: string) {
        return new CallMonitoringGroups(this, id);
    }

    /**
     * 
     */
    device(id?: string) {
        return new Device(this, id);
    }

    /**
     *  Returns basic information about a particular RingCentral customer account.
     */
    get(): Promise<GetAccountInfoResponse> {
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
     *  Returns basic information about a particular RingCentral customer account.
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
