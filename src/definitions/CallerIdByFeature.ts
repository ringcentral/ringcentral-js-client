// Generated Source
import CallerIdByFeatureInfo from "./CallerIdByFeatureInfo";

interface CallerIdByFeature {

    /**
     * 
     */
    feature?: "RingOut" | "RingMe" | "CallFlip" | "FaxNumber" | "AdditionalSoftphone" | "Alternate" | "CommonPhone" | "MobileApp" | "Delegated";

    /**
     * 
     */
    callerId?: CallerIdByFeatureInfo;
}

export default CallerIdByFeature;
