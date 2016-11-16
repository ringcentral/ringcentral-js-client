// Generated Source

interface ExtensionServiceFeatureInfo {

    /**
     * Feature status; shows feature availability for an extension
     */
    enabled?: boolean;

    /**
     * Feature name, see all available values in Service Feature List
     */
    featureName?: string;

    /**
     * Reason of limitation for a particular service feature. Returned only if the enabled parameter value is 'False', see Service Feature Limitations and Reasons. When retrieving service features for an extension, the reasons for the limitations, if any, are returned in response
     */
    reason?: string;
}

export default ExtensionServiceFeatureInfo;
