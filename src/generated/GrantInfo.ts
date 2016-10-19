// Generated Source
import { GrantInfoExtensionInfo } from "./GrantInfoExtensionInfo";

export interface GrantInfo {

    /**
     * Canonical URI of a grant
     */
    uri?: string;

    /**
     * Extension information
     */
    extension?: GrantInfoExtensionInfo;

    /**
     * Specifies if picking up of other extensions' calls is allowed for the extension. If 'Presence' feature is disabled for the given extension, the flag is not returned
     */
    callPickup?: boolean;

    /**
     * Specifies if monitoring of other extensions' calls is allowed for the extension. If 'CallMonitoring' feature is disabled for the given extension, the flag is not returned
     */
    callMonitoring?: boolean;
}