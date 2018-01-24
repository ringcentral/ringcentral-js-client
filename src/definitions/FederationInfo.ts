// Generated Source
import FederationAccountInfo from "./FederationAccountInfo";

interface FederationInfo {

    /**
     * Internal identifier of a federation
     */
    id?: string;

    /**
     * Name of a federation
     */
    displayName?: string;

    /**
     * Datetime of federation creation, in ISO 8601 format, for example 2016-03-10T18:07:52.534Z
     */
    creationTime?: string;

    /**
     * Datetime of the last change of federation composition, in ISO 8601 format, for example 2016-03-10T18:07:52.534Z
     */
    lastModifiedTime?: string;

    /**
     * List of countries which can be selected for a dialing plan
     */
    accounts?: FederationAccountInfo[];
}

export default FederationInfo;
