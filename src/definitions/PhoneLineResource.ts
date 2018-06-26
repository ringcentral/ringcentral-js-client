// Generated Source
import EmergencyAddress from "./EmergencyAddress";
import PhoneNumberResourceIntId from "./PhoneNumberResourceIntId";

interface PhoneLineResource {

    /**
     * 
     */
    lineType?: "Unknown" | "Standalone" | "BlaPrimary" | "BlaSecondary" | "BLF" | "StandaloneFree";

    /**
     * 
     */
    phoneInfo?: PhoneNumberResourceIntId;

    /**
     * 
     */
    emergencyAddress?: EmergencyAddress;
}

export default PhoneLineResource;
