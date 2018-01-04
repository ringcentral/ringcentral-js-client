// Generated Source
import FederationConflictsAccountInfo from "./FederationConflictsAccountInfo";

interface ConflictsInfo {

    /**
     * Internal identifier of a conflicting extension assigned to another account of the current federation
     */
    id?: string;

    /**
     * Extension user first name
     */
    firstName?: string;

    /**
     * Extension user last name
     */
    lastName?: string;

    /**
     * Account data of an extension
     */
    account?: FederationConflictsAccountInfo;
}

export default ConflictsInfo;
