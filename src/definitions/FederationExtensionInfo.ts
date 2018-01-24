// Generated Source
import ConflictsInfo from "./ConflictsInfo";

interface FederationExtensionInfo {

    /**
     * Internal identifier of an extension of current account
     */
    id?: string;

    /**
     * Number of an extension
     */
    extensionNumber?: string;

    /**
     * Extension user first name
     */
    firstName?: string;

    /**
     * Extension user last name
     */
    lastName?: string;

    /**
     * Conflicting extensions information
     */
    conflicts?: ConflictsInfo[];
}

export default FederationExtensionInfo;
