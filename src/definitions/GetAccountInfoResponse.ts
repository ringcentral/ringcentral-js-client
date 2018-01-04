// Generated Source
import AccountStatusInfo from "./AccountStatusInfo";
import GetExtensionInfoResponse from "./GetExtensionInfoResponse";
import RegionalSettings from "./RegionalSettings";
import ServiceInfo from "./ServiceInfo";

interface GetAccountInfoResponse {

    /**
     * Internal identifier of an account
     */
    id?: string;

    /**
     * Canonical URI of an account
     */
    uri?: string;

    /**
     * Main phone number of the current account
     */
    mainNumber?: string;

    /**
     * Operator's extension information. This extension will receive all calls and messages intended for the operator
     */
    operator?: GetExtensionInfoResponse;

    /**
     * Additional account identifier, developed and applied by the client
     */
    partnerId?: string;

    /**
     * Account service information, including brand, service plan and billing plan
     */
    serviceInfo?: ServiceInfo;

    /**
     * Specifies account configuration wizard state (web service setup). The default value is 'NotStarted'
     */
    setupWizardState?: "NotStarted" | "Incomplete" | "Completed";

    /**
     * Status of the current account
     */
    status?: "Confirmed" | "Disabled";

    /**
     * Status information (reason, comment, lifetime). Returned for 'Disabled' status only
     */
    statusInfo?: AccountStatusInfo;

    /**
     * Account level region data (web service Auto-Receptionist settings)
     */
    regionalSettings?: RegionalSettings;

    /**
     * Specifies whether an account is included into any federation of accounts or not
     */
    federated?: boolean;
}

export default GetAccountInfoResponse;
