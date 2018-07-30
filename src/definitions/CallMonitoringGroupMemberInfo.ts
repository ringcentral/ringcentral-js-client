// Generated Source

interface CallMonitoringGroupMemberInfo {

    /**
     * Link to a call monitoring group member
     */
    uri?: string;

    /**
     * Internal identifier of a call monitoring group member
     */
    id?: string;

    /**
     * Extension number of a call monitoring group member
     */
    extensionNumber?: string;

    /**
     * Call monitoring permission; mltiple values allowed: * "Monitoring" - User can monitor a group * "Monitored" - User can be monitored
     */
    permissions?: "Monitoring" | "Monitored";
}

export default CallMonitoringGroupMemberInfo;
