// Generated Source

interface CallerInfoTo {

    /**
     * 
     */
    phoneNumber?: string;

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
    messageStatus?: "Sent" | "SendingFailed" | "Queued";

    /**
     * 
     */
    faxErrorCode?: "Undefined" | "NoFaxSendPermission" | "NoInternationalPermission" | "NoFaxMachine" | "OutgoingCallError" | "RenderingFailed" | "TooManyPages" | "ReturnToDBQueue" | "NoCallTime" | "WrongNumber" | "ProhibitedNumber" | "InternalError" | "FaxSendingProhibited" | "ThePhoneIsBlacklisted" | "UserNotFound" | "ConvertError" | "DBGeneralError" | "SkypeBillingFailed" | "AccountSuspended" | "ProhibitedDestination" | "InternationalDisabled";
}

export default CallerInfoTo;
