// Generated Source

interface PresenceEvent {

    /**
     * Internal identifier of an extension. Optional parameter
     */
    extensionId?: string;

    /**
     * Telephony presence status. Returned if telephony status is changed. See Telephony Status Values
     */
    telephonyStatus?: "NoCall" | "CallConnected" | "Ringing" | "OnHold" | "ParkedCall";

    /**
     * Type of call termination. Supported for calls in 'NoCall' status. If the returned termination type is 'Intermediate' it means the call is not actually ended, the connection is established on one of the devices
     */
    terminationType?: "Final" | "Intermediate";

    /**
     * Order number of a notification to state the chronology
     */
    sequence?: number;

    /**
     * Aggregated presence status, calculated from a number of sources
     */
    presenceStatus?: "Offline" | "Busy" | "Available";

    /**
     * User-defined presence status (as previously published by the user)
     */
    userStatus?: "Offline" | "Busy" | "Available";

    /**
     * Extended DnD (Do not Disturb) status
     */
    dndStatus?: "TakeAllCalls" | "DoNotAcceptAnyCalls" | "DoNotAcceptDepartmentCalls" | "TakeDepartmentCallsOnly";

    /**
     * If 'True' enables other extensions to see the extension presence status
     */
    allowSeeMyPresence?: boolean;

    /**
     * If 'True' enables to ring extension phone, if any user monitored by this extension is ringing
     */
    ringOnMonitoredCall?: boolean;

    /**
     * If 'True' enables the extension user to pick up a monitored line on hold
     */
    pickUpCallsOnHold?: boolean;
}

export default PresenceEvent;
