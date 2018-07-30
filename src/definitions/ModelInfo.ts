// Generated Source
import AddonInfo from "./AddonInfo";

interface ModelInfo {

    /**
     * Addon identifier. For HardPhones of certain types, which are compatible with this addon identifier
     */
    id?: string;

    /**
     * Device name
     */
    name?: string;

    /**
     * Addons description
     */
    addons?: AddonInfo[];

    /**
     * Device feature or multiple features supported
     */
    features?: "BLA" | "Intercom" | "Paging"[];
}

export default ModelInfo;
