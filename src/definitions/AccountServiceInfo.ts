// Generated Source
import { BrandInfo } from "./BrandInfo";
import { ServicePlanInfo } from "./ServicePlanInfo";
import { BillingPlanInfo } from "./BillingPlanInfo";
import { ServiceFeatureInfo } from "./ServiceFeatureInfo";
import { AccountLimits } from "./AccountLimits";

export interface AccountServiceInfo {

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
     * Limits which are effective for the account
     */
    limits?: AccountLimits[];
}
