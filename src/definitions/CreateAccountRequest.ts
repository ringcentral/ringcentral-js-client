// Generated Source
import AccountSignupInfoRequest from "./AccountSignupInfoRequest";
import GetExtensionInfoResponse from "./GetExtensionInfoResponse";
import GetServiceInfoResponse from "./GetServiceInfoResponse";

interface CreateAccountRequest {

    /**
     * Main account VoIP phone number, either Local or Toll-Free. Cannot be Fax Only. Obtained via lookup/reserve API
     */
    mainNumber?: string;

    /**
     * Operator's extension information. This extension will receive all calls and messages intended for the operator
     */
    operator?: GetExtensionInfoResponse;

    /**
     * Partner identifier for this account
     */
    partnerId?: string;

    /**
     * Promotion code to calculate a discount
     */
    promotionCode?: string;

    /**
     * Internal identifier of phone number reservation; encoded data including reservation type (by brand, by account, by session), particular brand/account/session data, and reservation date and time
     */
    reservationId?: string;

    /**
     * Account service information, brand identifier and service plan
     */
    serviceInfo?: GetServiceInfoResponse;

    /**
     * The status with which an account is created. The default value is 'Initial'
     */
    status?: "Initial" | "Unconfirmed" | "Confirmed";

    /**
     * Account sign up data
     */
    signupInfo?: AccountSignupInfoRequest;
}

export default CreateAccountRequest;
