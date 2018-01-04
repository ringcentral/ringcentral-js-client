// Generated Source

interface AdbPresenceInfoResource {

    /**
     * 
     */
    accountId?: string;

    /**
     * 
     */
    extensionId?: string;

    /**
     * 
     */
    extensionType?: "Unknown" | "User" | "Department" | "Announcement" | "Voicemail" | "DigitalUser" | "VirtualUser" | "FaxUser" | "PagingOnly" | "SharedLinesGroup" | "ParkLocation" | "IvrMenu" | "ApplicationExtension";

    /**
     * 
     */
    extensionStatus?: "Enabled" | "Disabled" | "Frozen" | "NotActivated";

    /**
     * 
     */
    dndStatus?: "TakeAllCalls" | "DoNotAcceptDepartmentCalls" | "TakeDepartmentCallsOnly" | "DoNotAcceptAnyCalls";

    /**
     * 
     */
    userStatus?: "Available" | "Busy" | "Offline";

    /**
     * 
     */
    message?: string;

    /**
     * 
     */
    agentStatus?: "Offline" | "Online" | "Unknown";

    /**
     * 
     */
    extensionNumber?: string;

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
    presenceFeatureAvailable?: boolean;

    /**
     * 
     */
    dndFeatureAvailable?: boolean;
}

export default AdbPresenceInfoResource;
