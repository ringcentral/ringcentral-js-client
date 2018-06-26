// Generated Source

interface PutPresenceResource {

    /**
     * 
     */
    userStatus?: "Offline" | "Busy" | "Available";

    /**
     * 
     */
    message?: string;

    /**
     * 
     */
    dndStatus?: "TakeAllCalls" | "DoNotAcceptDepartmentCalls" | "TakeDepartmentCallsOnly" | "DoNotAcceptAnyCalls" | "Unknown";

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
}

export default PutPresenceResource;
