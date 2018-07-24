// Generated Source
import ActiveCallInfo from "./ActiveCallInfo";

interface DetailedExtensionPresenceWithSipEvent {

    /**
     * Internal identifier of an extension. Optional parameter
     */
    extensionId?: string;

    /**
     * Telephony presence status. Returned if telephony status is changed.
     */
    telephonyStatus?: "NoCall" | "CallConnected" | "Ringing" | "OnHold" | "ParkedCall";

    /**
     * Collection of Active Call Info
     */
    activeCalls?: ActiveCallInfo[];

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

export default DetailedExtensionPresenceWithSipEvent;
