// Generated Source
import EmergencyAddress from "./EmergencyAddress";
import PhoneNumberResource from "./PhoneNumberResource";

interface PhoneLineResource {

    /**
     * 
     */
    lineType?: "Unknown" | "Standalone" | "BlaPrimary" | "BlaSecondary" | "BLF" | "StandaloneFree";

    /**
     * 
     */
    phoneInfo?: PhoneNumberResource;

    /**
     * 
     */
    emergencyAddress?: EmergencyAddress;
}

export default PhoneLineResource;
