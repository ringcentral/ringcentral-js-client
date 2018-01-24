// Generated Source
import IvrMenuActionsInfo from "./IvrMenuActionsInfo";
import IvrMenuPromptInfo from "./IvrMenuPromptInfo";

interface IvrMenuInfo {

    /**
     * Internal identifier of an IVR Menu extension
     */
    id?: string;

    /**
     * Link to an IVR Menu extension resource
     */
    uri?: string;

    /**
     * First name of an IVR Menu user
     */
    name?: string;

    /**
     * Number of an IVR Menu extension
     */
    extensionNumber?: string;

    /**
     * Prompt metadata
     */
    prompt?: IvrMenuPromptInfo;

    /**
     * Keys handling settings
     */
    actions?: IvrMenuActionsInfo[];
}

export default IvrMenuInfo;
