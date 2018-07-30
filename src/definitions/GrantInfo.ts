// Generated Source
import ExtensionInfoGrants from "./ExtensionInfoGrants";

interface GrantInfo {

    /**
     * Canonical URI of a grant
     */
    uri?: string;

    /**
     * Extension information
     */
    extension?: ExtensionInfoGrants;

    /**
     * Specifies if picking up of other extensions' calls is allowed for the extension. If 'Presence' feature is disabled for the given extension, the flag is not returned
     */
    callPickup?: boolean;

    /**
     * Specifies if monitoring of other extensions' calls is allowed for the extension. If 'CallMonitoring' feature is disabled for the given extension, the flag is not returned
     */
    callMonitoring?: boolean;

    /**
     * Specifies whether the current extension is able to make or receive calls on behalf of the user referenced in extension object
     */
    callOnBehalfOf?: boolean;

    /**
     * Specifies whether the current extension can delegate a call to the user referenced in extension object
     */
    callDelegation?: boolean;
}

export default GrantInfo;
