// Generated Source
import OptionInfoReason from "./OptionInfoReason";

interface OptionInfo {

    /**
     * Specifies if the feature is allowed ('True') or disallowed ('False') for the special number
     */
    enabled?: boolean;

    /**
     * The reason explaining why the option is disallowed. Returned if the value of enabled is 'False'
     */
    reason?: OptionInfoReason;
}

export default OptionInfo;
