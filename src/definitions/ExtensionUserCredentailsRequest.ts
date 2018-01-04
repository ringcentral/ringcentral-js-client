// Generated Source
import ExtensionSecretQuestionInfo from "./ExtensionSecretQuestionInfo";

interface ExtensionUserCredentailsRequest {

    /**
     * User password of an extension
     */
    password?: string;

    /**
     * User pin of an extension
     */
    ivrPin?: string;

    /**
     * 
     */
    secretQuestion?: ExtensionSecretQuestionInfo;
}

export default ExtensionUserCredentailsRequest;
