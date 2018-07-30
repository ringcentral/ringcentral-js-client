// Generated Source
import CustomCompanyGreetingAnsweringRuleInfo from "./CustomCompanyGreetingAnsweringRuleInfo";
import CustomCompanyGreetingLanguageInfoRequest from "./CustomCompanyGreetingLanguageInfoRequest";

interface CustomCompanyGreetingRequest {

    /**
     * Type of a greeting
     */
    type?: "Company" | "StartRecording" | "StopRecording" | "AutomaticRecording";

    /**
     * Information on an answering rule that the greeting is applied to
     */
    answeringRule?: CustomCompanyGreetingAnsweringRuleInfo;

    /**
     * Information on a greeting language. Supported for types 'StopRecording', 'StartRecording', 'AutomaticRecording'
     */
    language?: CustomCompanyGreetingLanguageInfoRequest;
}

export default CustomCompanyGreetingRequest;
