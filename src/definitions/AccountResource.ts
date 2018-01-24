// Generated Source
import AccountServiceInfoResource from "./AccountServiceInfoResource";
import ExtensionResource from "./ExtensionResource";
import SignupInfoResource from "./SignupInfoResource";
import StatusInfo from "./StatusInfo";

interface AccountResource {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    id?: string;

    /**
     * 
     */
    serviceInfo?: AccountServiceInfoResource;

    /**
     * 
     */
    partnerId?: string;

    /**
     * 
     */
    operator?: ExtensionResource;

    /**
     * 
     */
    mainNumber?: string;

    /**
     * 
     */
    reservationId?: string;

    /**
     * 
     */
    sessionId?: string;

    /**
     * 
     */
    status?: "Initial" | "Unconfirmed" | "Confirmed" | "Disabled";

    /**
     * 
     */
    statusInfo?: StatusInfo;

    /**
     * 
     */
    signupInfo?: SignupInfoResource;

    /**
     * 
     */
    setupWizardState?: "NotStarted" | "Incomplete" | "Completed" | "Unknown";

    /**
     * 
     */
    testerFlags?: string[];

    /**
     * 
     */
    promotionCode?: string;
}

export default AccountResource;
