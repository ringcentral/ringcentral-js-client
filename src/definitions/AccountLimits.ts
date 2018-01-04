// Generated Source

interface AccountLimits {

    /**
     * The maximum number of free softphone phone lines per user extension
     */
    freeSoftPhoneLinesPerExtension?: number;

    /**
     * The maximum number of participants in RingCentral Meeting hosted by this account's user
     */
    meetingSize?: number;

    /**
     * The maximum number of extensions which can be included in the list of users monitored for Presence
     */
    maxMonitoredExtensionsPerUser?: number;

    /**
     * Maximum length for extension numbers of an account; depends on account type. The default value is 5
     */
    maxExtensionNumberLength?: number;
}

export default AccountLimits;
