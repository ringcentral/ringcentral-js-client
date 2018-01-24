// Generated Source
import AccountLimits from "./AccountLimits";
import ServiceFeatureInfo from "./ServiceFeatureInfo";

interface GetServiceInfoResponse {

    /**
     * Canonical URI of the account Service Info resource
     */
    uri?: string;

    /**
     * Account Service Plan name
     */
    servicePlanName?: string;

    /**
     * Service features information, see Service Feature List
     */
    serviceFeatures?: ServiceFeatureInfo[];

    /**
     * Limits which are effective for the account
     */
    limits?: AccountLimits;
}

export default GetServiceInfoResponse;
