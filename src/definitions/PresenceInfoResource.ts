// Generated Source
import ActiveCallInfo from "./ActiveCallInfo";

interface PresenceInfoResource {

    /**
     * 
     */
    userStatus?: "Offline" | "Busy" | "Available";

    /**
     * 
     */
    dndStatus?: "TakeAllCalls" | "DoNotAcceptDepartmentCalls" | "TakeDepartmentCallsOnly" | "DoNotAcceptAnyCalls" | "Unknown";

    /**
     * 
     */
    message?: string;

    /**
     * 
     */
    allowSeeMyPresence?: boolean;

    /**
     * 
     */
    ringOnMonitoredCall?: boolean;

    /**
     * 
     */
    pickUpCallsOnHold?: boolean;

    /**
     * 
     */
    activeCalls?: ActiveCallInfo[];
}

export default PresenceInfoResource;
