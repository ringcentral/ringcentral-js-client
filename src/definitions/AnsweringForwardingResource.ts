// Generated Source
import AnsweringForwardingRuleResource from "./AnsweringForwardingRuleResource";

interface AnsweringForwardingResource {

    /**
     * 
     */
    notifyMySoftPhones?: boolean;

    /**
     * 
     */
    notifyAdminSoftPhones?: boolean;

    /**
     * 
     */
    softPhonesRingCount?: number;

    /**
     * 
     */
    ringingMode?: "Sequentially" | "Simultaneously";

    /**
     * 
     */
    rules?: AnsweringForwardingRuleResource[];
}

export default AnsweringForwardingResource;
