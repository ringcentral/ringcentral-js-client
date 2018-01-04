// Generated Source
import AccountLimitsResource from "./AccountLimitsResource";
import BillingPlanResource from "./BillingPlanResource";
import Brand from "./Brand";
import ServiceFeatureValue from "./ServiceFeatureValue";
import ServicePlan from "./ServicePlan";

interface AccountServiceInfoResource {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    servicePlanName?: string;

    /**
     * 
     */
    brand?: Brand;

    /**
     * 
     */
    servicePlan?: ServicePlan;

    /**
     * 
     */
    targetServicePlan?: ServicePlan;

    /**
     * 
     */
    billingPlan?: BillingPlanResource;

    /**
     * 
     */
    serviceFeatures?: ServiceFeatureValue[];

    /**
     * 
     */
    limits?: AccountLimitsResource;
}

export default AccountServiceInfoResource;
