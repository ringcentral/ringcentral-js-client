// Generated Source
import { AddonInfo } from "./AddonInfo";

export interface ModelInfo {

    /**
     * Device model identifier. Mandatory when ordering a HardPhone if boxBillingId is not used for ordering
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
}