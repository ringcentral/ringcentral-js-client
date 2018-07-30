// Generated Source
import EmergencyAddress from "./EmergencyAddress";
import PhoneNumberResourceIntId from "./PhoneNumberResourceIntId";

interface PhoneLineResource {

    /**
     * 
     */
    lineType?: "Unknown" | "Standalone" | "StandaloneFree" | "BlaPrimary" | "BlaSecondary" | "BLF";

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
