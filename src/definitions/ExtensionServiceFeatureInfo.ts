// Generated Source

interface ExtensionServiceFeatureInfo {

    /**
     * Feature status; shows feature availability for an extension
     */
    enabled?: boolean;

    /**
     * Feature name
     */
    featureName?: "AccountFederation" | "AutomaticCallRecordingMute" | "AutomaticInboundCallRecording" | "AutomaticOutboundCallRecording" | "BlockedMessageForwarding" | "Calendar" | "CallerIdControl" | "CallForwarding" | "CallPark" | "CallParkLocations" | "CallSupervision" | "CallSwitch" | "CallQualitySurvey" | "Conferencing" | "ConfigureDelegates" | "DeveloperPortal" | "DND" | "EmergencyCalling" | "EncryptionAtRest" | "ExternalDirectoryIntegration" | "Fax" | "FaxReceiving" | "FreeSoftPhoneLines" | "HDVoice" | "HipaaCompliance" | "Intercom" | "InternationalCalling" | "InternationalSMS" | "LinkedSoftphoneLines" | "MMS" | "OnDemandCallRecording" | "Pager" | "PagerReceiving" | "Paging" | "PasswordAuth" | "PromoMessage" | "Reports" | "Presence" | "RCTeams" | "RingOut" | "SalesForce" | "SingleExtensionUI" | "SiteCodes" | "SMS" | "SMSReceiving" | "SoftPhoneUpdate" | "UserManagement" | "VideoConferencing" | "VoipCalling" | "VoipCallingOnMobile" | "Voicemail" | "VoicemailToText" | "WebPhone" | "";

    /**
     * Reason of limitation for a particular service feature. Returned only if the enabled parameter value is 'False', see Service Feature Limitations and Reasons. When retrieving service features for an extension, the reasons for the limitations, if any, are returned in response
     */
    reason?: string;
}

export default ExtensionServiceFeatureInfo;
