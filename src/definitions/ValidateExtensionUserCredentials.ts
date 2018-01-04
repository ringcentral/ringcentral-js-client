// Generated Source
import SecretQuestionInfoValidationRequest from "./SecretQuestionInfoValidationRequest";

interface ValidateExtensionUserCredentials {

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
    secretQuestion?: SecretQuestionInfoValidationRequest;
}

export default ValidateExtensionUserCredentials;
