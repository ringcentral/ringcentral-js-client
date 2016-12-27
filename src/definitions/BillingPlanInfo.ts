// Generated Source

interface BillingPlanInfo {

    /**
     * Internal identifier of a billing plan
     */
    id?: string;

    /**
     * Billing plan name
     */
    name?: string;

    /**
     * Duration period
     */
    durationUnit?: "Month" | "Day";

    /**
     * Number of duration units
     */
    duration?: string;

    /**
     * Billing plan type
     */
    type?: "Initial" | "Regular" | "Suspended" | "Trial" | "TrialNoCC" | "Free";
}

export default BillingPlanInfo;
