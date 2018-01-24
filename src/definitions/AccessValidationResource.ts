// Generated Source

interface AccessValidationResource {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    applicationId?: string;

    /**
     * 
     */
    endpointId?: string;

    /**
     * 
     */
    sessionId?: string;

    /**
     * 
     */
    credentialType?: "Password" | "IvrPin" | "ExternalSso" | "NativeId" | "ExternalId" | "None" | "AIToken";

    /**
     * 
     */
    scope?: "ReadMessages" | "SMS" | "InternalMessages" | "Faxes" | "ReadCallLog" | "EditCallLog" | "ReadContacts" | "Contacts" | "EditMessages" | "EditExtensions" | "ReadAccounts" | "EditAccounts" | "Accounts" | "ReadPresence" | "EditPresence" | "RingOut" | "DirectRingOut" | "ReadClientInfo" | "NumberLookup" | "EditCustomData" | "EditPaymentInfo" | "Interoperability" | "ReadCallRecording" | "EditReportingSettings" | "VoipCalling" | "Meetings" | "RoleManagement"[];

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
    brandId?: string;

    /**
     * 
     */
    tierId?: string;
}

export default AccessValidationResource;
