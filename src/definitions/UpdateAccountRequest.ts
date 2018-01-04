// Generated Source
import AccountServiceInfo from "./AccountServiceInfo";
import AccountStatusInfo from "./AccountStatusInfo";
import RegionalSettings from "./RegionalSettings";
import SignupInfoResource from "./SignupInfoResource";
import TransitionInfo from "./TransitionInfo";

interface UpdateAccountRequest {

    /**
     * Target account status. For account activation - 'Unconfirmed'. For account confirmation - 'Confirmed'. For changing account status - 'Confirmed' or 'Disabled' = ['Unconfirmed', 'Confirmed', 'Disabled'],
     */
    status?: "Unconfirmed" | "Confirmed" | "Disabled";

    /**
     * Status information (reason, comment, lifetime). Returned for 'Disabled' status only
     */
    statusInfo?: AccountStatusInfo;

    /**
     * Email notifications setting
     */
    transitionInfo?: TransitionInfo;

    /**
     * Additional account identifier, developed and applied on the client side
     */
    partnerId?: string;

    /**
     * Account service information, including brand, service plan and billing plan
     */
    serviceInfo?: AccountServiceInfo;

    /**
     * Account level region data (web service Auto-Receptionist settings)
     */
    regionalSettings?: RegionalSettings;

    /**
     * Identifier of extension to be set as operator for account
     */
    operatorId?: string;

    /**
     * Account sign up data
     */
    signupInfo?: SignupInfoResource;
}

export default UpdateAccountRequest;
