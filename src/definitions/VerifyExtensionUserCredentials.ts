// Generated Source
import SecretQuestionInfoVerificationRequest from "./SecretQuestionInfoVerificationRequest";

interface VerifyExtensionUserCredentials {

    /**
     * User password of an extension
     */
    password?: string;

    /**
     * User pin of an extension
     */
    ivrPin?: string;

    /**
     * Secret question of an extension user
     */
    secretQuestion?: SecretQuestionInfoVerificationRequest;
}

export default VerifyExtensionUserCredentials;
