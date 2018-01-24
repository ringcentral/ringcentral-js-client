// Generated Source
import CustomGreetingAnsweringRuleInfo from "./CustomGreetingAnsweringRuleInfo";

interface CustomCompanyGreetingInfo {

    /**
     * Link to an extension custom greeting
     */
    uri?: string;

    /**
     * Internal identifier of an answering rule
     */
    id?: string;

    /**
     * Internal identifier of an answering rule
     */
    type?: "Company";

    /**
     * Content media type in WAV/MP3 format
     */
    contentType?: "WAV" | "MP3";

    /**
     * Link to a greeting content (audio file)
     */
    contentUri?: string;

    /**
     * Information on an answering rule that the greeting is applied to
     */
    answeringRule?: CustomGreetingAnsweringRuleInfo;
}

export default CustomCompanyGreetingInfo;
