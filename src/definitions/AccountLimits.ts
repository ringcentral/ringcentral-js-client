// Generated Source

interface AccountLimits {

    /**
     * Max number of free softphone phone lines per user extension
     */
    freeSoftPhoneLinesPerExtension?: number;

    /**
     * Max number of participants in RingCentral Meeting hosted by this account's user
     */
    meetingSize?: number;

    /**
     * Max number of extensions which can be included in the list of users monitored for Presence
     */
    maxMonitoredExtensionsPerUser?: number;

    /**
     * Max length of extension numbers of an account; depends on account type
     */
    maxExtensionNumberLength?: number;

    /**
     * Length of a site code
     */
    siteCodeLength?: number;

    /**
     * Length of a short extension number
     */
    shortExtensionNumberLength?: number;
}

export default AccountLimits;
