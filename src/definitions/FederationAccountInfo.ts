// Generated Source
import FederationMainNumberInfo from "./FederationMainNumberInfo";

interface FederationAccountInfo {

    /**
     * Internal identifier of an account
     */
    id?: string;

    /**
     * Company name of an account
     */
    companyName?: string;

    /**
     * Federation name of an account
     */
    federatedName?: string;

    /**
     * Datetime when this account was linked to a federation, in ISO 8601 format, for example 2016-03-10T18:07:52.534Z
     */
    linkCreationTime?: string;

    /**
     * Main company number information
     */
    mainNumber?: FederationMainNumberInfo;

    /**
     * Count of federation extension numbers conflicting with extension numbers of the requested account. For extension numbers of the requested account the value of this parameter is '0'
     */
    conflictCount?: number;
}

export default FederationAccountInfo;
