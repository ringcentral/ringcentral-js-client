// Generated Source
import AudioPromptInfo from "./AudioPromptInfo";
import PromptLanguageInfo from "./PromptLanguageInfo";

interface IvrMenuPromptInfo {

    /**
     * Prompt mode: custom media or text = ['Audio', 'TextToSpeech']
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
