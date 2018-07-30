// Generated Source
import AudioPromptInfo from "./AudioPromptInfo";
import PromptLanguageInfo from "./PromptLanguageInfo";

interface IvrMenuPromptInfo {

    /**
     * Prompt mode: custom media or text
     */
    mode?: "Audio" | "TextToSpeech";

    /**
     * For 'Audio' mode only. Prompt media reference
     */
    audio?: PromptLanguageInfo;

    /**
     * For 'TextToSpeech' mode only. Prompt text
     */
    text?: string;

    /**
     * For 'TextToSpeech' mode only. Prompt language metadata
     */
    language?: AudioPromptInfo;
}

export default IvrMenuPromptInfo;
