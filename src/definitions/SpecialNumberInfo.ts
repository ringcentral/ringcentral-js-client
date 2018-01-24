// Generated Source
import SpecialNumberFeaturesInfo from "./SpecialNumberFeaturesInfo";

interface SpecialNumberInfo {

    /**
     * Service phone number in N11 code format
     */
    phoneNumber?: string;

    /**
     * Description of a special number
     */
    description?: string;

    /**
     * Information on options allowed/disallowed for the special number
     */
    features?: SpecialNumberFeaturesInfo;
}

export default SpecialNumberInfo;
