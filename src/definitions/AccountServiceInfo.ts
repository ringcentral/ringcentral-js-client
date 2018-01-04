// Generated Source
import AccountLimits from "./AccountLimits";
import BillingPlanInfo from "./BillingPlanInfo";
import BrandInfo from "./BrandInfo";
import ServiceFeatureInfo from "./ServiceFeatureInfo";
import ServicePlanInfo from "./ServicePlanInfo";

interface AccountServiceInfo {

    /**
     * Canonical URI of the account Service Info resource
     */
    uri?: string;

    /**
     * Account Service Plan name
     */
    servicePlanName?: string;

    /**
     * Information on account brand
     */
    brand?: BrandInfo;

    /**
     * Information on account service plan
     */
    servicePlan?: ServicePlanInfo;

    /**
     * Information on account billing plan
     */
    billingPlan?: BillingPlanInfo;

    /**
     * Service features information, see Service Feature List
     */
    serviceFeatures?: ServiceFeatureInfo[];

    /**
     * Limits which are effective for an account
     */
    limits?: AccountLimits;
}

export default AccountServiceInfo;
