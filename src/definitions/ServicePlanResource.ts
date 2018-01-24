// Generated Source
import AccountLimitsResource from "./AccountLimitsResource";
import BrandResource from "./BrandResource";
import ServiceFeatureValue from "./ServiceFeatureValue";

interface ServicePlanResource {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    id?: string;

    /**
     * 
     */
    name?: string;

    /**
     * 
     */
    edition?: "Unknown" | "Standard" | "Premium" | "Enterprise" | "Unlimited" | "HighUsage";

    /**
     * 
     */
    brand?: BrandResource;

    /**
     * 
     */
    type?: "Regular" | "UserBased" | "Unknown";

    /**
     * 
     */
    serviceFeatures?: ServiceFeatureValue[];

    /**
     * 
     */
    limits?: AccountLimitsResource;
}

export default ServicePlanResource;
