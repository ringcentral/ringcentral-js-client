// Generated Source
import PersonalContactResource from "./PersonalContactResource";

interface CallerInfo {

    /**
     * 
     */
    phoneNumber?: string;

    /**
     * 
     */
    extensionNumber?: string;

    /**
     * 
     */
    name?: string;

    /**
     * 
     */
    location?: string;

    /**
     * 
     */
    contact?: PersonalContactResource;

    /**
     * 
     */
    messageStatus?: "Sent" | "SendingFailed" | "Queued";

    /**
     * 
     */
    faxErrorCode?: "Undefined" | "NoFaxSendPermission" | "NoInternationalPermission" | "NoFaxMachine" | "OutgoingCallError" | "RenderingFailed" | "TooManyPages" | "ReturnToDBQueue" | "NoCallTime" | "WrongNumber" | "ProhibitedNumber" | "InternalError" | "FaxSendingProhibited" | "ThePhoneIsBlacklisted" | "UserNotFound" | "ConvertError" | "DBGeneralError" | "SkypeBillingFailed" | "AccountSuspended" | "ProhibitedDestination" | "InternationalDisabled";
}

export default CallerInfo;
