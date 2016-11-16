// Generated Source
import ExtensionInfo from "./ExtensionInfo";
import AccountServiceInfo from "./AccountServiceInfo";
import StatusInfo from "./StatusInfo";

interface AccountInfo {

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
    operator?: ExtensionInfo;

    /**
     * Additional account identifier, developed and applied by the client
     */
    partnerId?: string;

    /**
     * Account service information, including brand, service plan and billing plan
     */
    serviceInfo?: AccountServiceInfo;

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
    statusInfo?: StatusInfo;
}

export default AccountInfo;
