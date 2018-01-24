// Generated Source
import FeeChargeResource from "./FeeChargeResource";

interface BillingStatementResource {

    /**
     * 
     */
    fees?: FeeChargeResource[];

    /**
     * 
     */
    charges?: FeeChargeResource[];

    /**
     * 
     */
    totalCharges?: number;

    /**
     * 
     */
    totalFees?: number;

    /**
     * 
     */
    subtotal?: number;

    /**
     * 
     */
    currency?: string;
}

export default BillingStatementResource;
